import API from '../utilities/api.js'
import card from '../utilities/card.js'

const breadcrumbs = document.getElementById('breadcrumbs')
const productDetail = document.getElementById('product-detail')

window.addEventListener('load', async function () {
  const urlID = this.window.location.search
  try {
    const response = await this.fetch(API)
    const products = await response.json()

    const singleProduct = products.filter(
      (product) => `?id=${product.id}` === urlID
    )
    singleProduct.forEach((product) => {
      document.title = `${product.name.toUpperCase()}`

      breadcrumbs.innerHTML = `
            <ul>
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./index.html#/tienda">Colección</a></li>
                <li><span>${product.name}</span></li>
            </ul>            
            `
      productDetail.innerHTML = `
    <div class="product__img">
                <img src=${product.img}>  
        </div>
        <div class="product__info">
            <p>#000${product.id} • <span>${product.color}<span></p>
            <h1>${product.category} ${product.name}</h1>
            <strong>$${product.price}</strong>           
        <div class="black-button" data-id="${product.id}">
                <button>Comprar</button>
        </div>
            
            
    </div>
            `
      const novedades = products.filter((product) => product.newIn === true)
      card((novedades), document.getElementById('new-in'))
      console.log(novedades)
    })
  } catch (error) {
    console.error(error)
  }
})
