
const filterCategory = (data) => {
  const categories = document.getElementById('categories')

  const productCategory = data.filter((product) => product.category)
  console.log(productCategory)
  productCategory.forEach((product) => {
    categories.innerHTML = `
                <p>${product.category}</p>
    `
  })
}

export { filterCategory }
