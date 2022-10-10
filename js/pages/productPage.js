const data = '../../db/data.json'

const breadcrumbs = document.getElementById('breadcrumbs')
const productDetail = document.getElementById('product-detail')

window.addEventListener('load', async function () {
  const urlID = this.window.location.search
  try {
    const response = await this.fetch(data)
    const products = await response.json()

    const singleProduct = products.filter(
      (product) => `?id=${product.id}` === urlID
    )
    singleProduct.forEach((product) => {
      document.title = `${product.name.toUpperCase()} lalala`

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
            <p>#000${product.id} • <span>${
        product.color
    }<span></p>
            <h1>${product.category} ${product.name}</h1>
            <strong>$${product.price}</strong>           
            <div class="black-button" data-id="${product.id}">
                <button>Comprar</button>
            </div>
            <div class="product__service">
                <i class="fas fa-shipping-fast"></i>
                <div>
                    <span>Envío Gratis</span>
                    <p>Compras superiores a $2100.00</p>
                </div>
            </div>
            <div class="product__service">
                <i class="fas fa-sync"></i>
                <div>
                    <span>Cambios y Devoluciones</span>
                    <p>30 días después de la compra</p>
                </div>
            </div>
        </div>
            `
    })
  } catch (error) {
    console.error(error)
  }
})
