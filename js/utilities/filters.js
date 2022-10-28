import card from './card.js'

const filterCategory = (data) => {
  const categories = ['Todos', ...new Set(data.map((product) => product.category))]
  const categoriesDOM = document.getElementById('categories')
  categoriesDOM.innerHTML = categories.map((category) => {
    return `<button class="category-button">${category}</button>`
  })
    .join('')
  categoriesDOM.addEventListener('click', function (e) {
    const element = e.target
    if (element.classList.contains('category-button')) {
      let newStore = []
      if (element.textContent === 'Todos') {
        newStore = [...data]
      } else {
        newStore = data.filter((product) => product.category === e.target.textContent)
      }
      card(newStore, document.getElementById('collection'))
    }
  })
}

const filterColors = (data) => {
  const categories = [...new Set(data.map((product) => product.color))]
  const categoriesDOM = document.getElementById('colors')
  categoriesDOM.innerHTML = categories.map((color) => {
    return `<button class="color-button" style="width: 20px; height: 20px;background-color:${color};
    border:1px solid #B5B2B2;border-radius:50%;">${color}</button>`
  })
    .join('')
  categoriesDOM.addEventListener('click', function (e) {
    const element = e.target
    if (element.classList.contains('color-button')) {
      let colorStore = [...data]
      colorStore = data.filter((product) => product.color === e.target.textContent)
      card(colorStore, document.getElementById('collection'))
    }
  })
}

export { filterColors, filterCategory }
