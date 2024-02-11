export function sortServicesList(responseList) {

  function findChildren(parentId) {
    const children = []
    
    responseList.forEach((item) => {
      if (item.head === parentId) {
        const node = {
          id: item.id,
          name: item.name,
          node: item.node,
          price: item.price,
          sorthead: item.sorthead,
          children: []
        }
        if (item.node === 1) {
          node.children = findChildren(item.id)
        }
        children.push(node)
      }
    })
    
    children.sort((a, b) => a.sorthead - b.sorthead)
    
    return children
  }

  const sortedTree = findChildren(null)

  return sortedTree
}