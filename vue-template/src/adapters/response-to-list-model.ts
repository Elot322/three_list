import type { TServicesResponse, TServicesModel } from "./index.d";

export function responseToListModel(services: TServicesResponse | undefined): TServicesModel[] {
  if (!services) {
    return []
  }

  //Получаем верхние
  const nodes: TServicesModel[] = services
    .filter((value) => value.head === null)
    .map((value) => {
      return {
        id: value.id,
        name: value.name,
        node: value.node,
        head: value.head,
        price: value.price,
        sorthead: value.sorthead,
        children: []
      }
    })
    .sort((a, b) => a.sorthead - b.sorthead)

  //Получаем все элементы, которые являются узлами
  const childsNode: TServicesModel[] = services
  .filter((value) => value.head !== null && value.node === 1)
  .map((value) => {
    return {
      id: value.id,
      name: value.name,
      node: value.node,
      head: value.head,
      price: value.price,
      sorthead: value.sorthead,
      children: []
    }
  })
  .sort((a, b) => a.sorthead - b.sorthead)

  //Получаем все элементы, которые являются листами
  const children: TServicesModel[] = services
  .filter((value) => value.head !== null && value.node === 0)
  .map((value) => {
    return {
      id: value.id,
      name: value.name,
      node: value.node,
      price: value.price,
      head: value.head,
      sorthead: value.sorthead,
      children: []
    }
  })
  .sort((a, b) => a.sorthead - b.sorthead)

  
  //Объединяем все в одно
  nodes.forEach((node) => {
    if (node.node === 1) {
      childsNode.forEach((childNode) => {
        if (node.id === childNode.head) {
          node.children.push(childNode)
          if (childNode.node === 1) {
            children.forEach((child) => {
              if(childNode.id == child.head) {
                childNode.children.push(child)
              }
            })
          }
        }
      })
    }
  })
  

  return nodes
}