import API from '../service/api.js'
import card from '../utilities/card.js'
import '../cart/toggle.js'
import { addToCart } from '../cart/functions.js'

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
                <li><a href="./index.html#/tienda">Store</a></li>
                <li><span>${product.name}</span></li>
            </ul>            
            `
      productDetail.innerHTML = `
    <div class="product__img">
                <img src=${product.img}>  
        </div>
        <div class="product__info">
            <p>#0A${product.id}50</p>
            <p>Color: <button class="color-button" style="width: 20px; height: 20px;background-color:${product.color};
            border:1px solid #B5B2B2;border-radius:50%;color: transparent;">${product.color}</button></p>
            <p>Tamaños: ${product.size}</p>
            <h1>${product.category} ${product.name}</h1>
            <strong>$${product.price}</strong>           
        <div class="black-button" data-id="${product.id}">
                <button>Comprar</button>
        </div>
            
            
    </div>
            `
      const novedades = products.filter((product) => product.newIn === true)
      card(novedades, document.getElementById('new-in'))
    })
  } catch (error) {
    console.error(error)
  }
})
productDetail.addEventListener('click', function (e) {
  const parent = e.target.parentElement
  const parentID = e.target.parentElement.dataset.id

  if (parent.classList.contains('black-button')) {
    addToCart(parentID)
  }
})
