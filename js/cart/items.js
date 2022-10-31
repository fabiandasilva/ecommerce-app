
// DOM ITEM EN CARRITO

const addToCartDOM = ({ id, name, price, category, color, amount, img }) => {
  const div = document.createElement('div')
  div.classList.add('item')
  div.setAttribute('data-id', id)
  div.innerHTML = `
        <div class="item__image">
            <img src=${img} alt=${name}-${color}>
        </div>
        <div class="item__data">
            <i class="far fa-trash-alt item__bin" data-id="${id}"></i>
            <h3><a href="#">${name} ${category}</a></h3>
            <h4>${color}</h4>
            <div class="item__units">
                <div class="cart-item-decrease-btn" data-id="${id}">
                    <i class="fas fa-minus"></i>
                </div>
                <strong class="cart-item-amount" data-id="${id}">${amount}</strong>
                <div class="cart-item-increase-btn" data-id="${id}">
                    <i class="fas fa-plus"></i>
                </div>
            </div>
            <strong class="item__total">${price}</strong>
        </div>
    `
  document.getElementById('cart-items').appendChild(div)
}

// EXPORT

export default addToCartDOM
