import { addToCart } from '../cart/functions.js'

const card = (products, element) => {
  element.innerHTML = products.map((product) => {
    const { id, name, price, img, category } = product
    return ` 
    <div class="card">
        <div class="overlay__item">
        <img src=${img} alt="" class="overlay__item">
            <div class="overlay__content">
                <div class="overlay__buttons">
                    <a href="product.html?id=${id}">
                        <i class="fas fa-eye"></i>
                    </a>                   
                </div>
                </div>
        </div>
        <div class="card__detail">
            <h3><a href="product.html?id=${id}">${category} ${name}</a></h3>
            <p>$${price}</p>
        </div>
        </div>
    </div>
`
  })
    .join('')

  element.addEventListener('click', function (e) {
    const parent = e.target.parentElement
    if (parent.classList.contains('overlay__cart')) {
      addToCart(parent.dataset.id)
    }
  })
}

export default card
