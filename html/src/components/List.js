function createListOfTree(tree, hasChild) {
  let html = `<ul ${hasChild ? 'class=toogled' : ''}>`

  tree.forEach(service => {
    html += '<li>' + `<span ${service.children.length ? 'class=caret-down' : ''}>` + service.name + 
      `${service.node === 0 ? ' - Цена: ' + service.price : ''}`+ '</span>'

    if (service.children.length) {
      html += createListOfTree(service.children, true)
    }
      
    html += '</li>'
  });
    
  html += '</ul>'
  

  return html
}

export default class List {
  constructor(tree) {
    this.tree = tree
  }

  create() {
    const html = createListOfTree(this.tree)
    //Небезопасный метод, возможно лучше сделать через addElement
    document.getElementById('tree').innerHTML = html

    //Прослушиватель событий для сворачивания - разворачивания элементов
    const clickedElems = document.getElementsByClassName('caret-down')
    for (let i = 0; i < clickedElems.length; i++) {
      clickedElems[i].addEventListener('click', (e) => {
        clickedElems[i].parentElement.querySelector('.toogled').classList.toggle('close')
        clickedElems[i].classList.toggle('caret')
      })
    }
    
  }
}