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

export { filterCategory }
