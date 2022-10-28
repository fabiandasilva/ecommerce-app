import card from './card.js'

const filterCategory = (data) => {
  const categories = [
    'Todos',
    ...new Set(data.map((product) => product.category))
  ]
  const categoriesDOM = document.getElementById('categories')
  categoriesDOM.innerHTML = categories
    .map((category) => {
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
        newStore = data.filter(
          (product) => product.category === e.target.textContent
        )
      }
      card(newStore, document.getElementById('collection'))
    }
  })
}

const filterColors = (data) => {
  const categories = [...new Set(data.map((product) => product.color))]
  const categoriesDOM = document.getElementById('colors')
  categoriesDOM.innerHTML = categories
    .map((color) => {
      return `<button class="color-button" style="width: 20px; height: 20px;background-color:${color};
    border:1px solid #B5B2B2;border-radius:50%;">${color}</button>`
    })
    .join('')
  categoriesDOM.addEventListener('click', function (e) {
    const element = e.target
    if (element.classList.contains('color-button')) {
      let colorStore = [...data]
      colorStore = data.filter(
        (product) => product.color === e.target.textContent
      )
      card(colorStore, document.getElementById('collection'))
    }
  })
}

const filterPrice = (data) => {
  const priceInput = document.getElementById('price-input')
  const priceValue = document.getElementById('price-value')

  let maxPrice = data.map((product) => product.price)
  maxPrice = Math.max(...maxPrice)
  maxPrice = Math.ceil(maxPrice)
  priceInput.value = maxPrice
  priceInput.max = maxPrice
  priceInput.min = 0
  priceValue.textContent = `Máximo: $${maxPrice}`

  priceInput.addEventListener('input', function () {
    const value = parseInt(priceInput.value)
    priceValue.textContent = `Máximo: $${value}`
    const newStore = data.filter((product) => product.price <= value)
    card(newStore, document.getElementById('collection'), true)
    if (newStore.length < 1) {
      const products = document.getElementById('collection')
      products.innerHTML = `
              <div class="error">
                  <i class="fas fa-exclamation-triangle"></i>
                  <span>Oops! No hay productos que coincidan con tu búsqueda.</span>
              </div>
          `
    }
  })
}
export { filterColors, filterCategory, filterPrice }
