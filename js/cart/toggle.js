/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
const cartOverlay = document.getElementById('cart-overlay')
const toggleCartBtn = document.getElementById('toggle-cart')
const closeCartBtn = document.getElementById('close-cart')
const checkOut = document.getElementById('checkout')
const cartItemCountDOM = document.getElementById('cart-item-count')
const notifications = document.getElementById('notifications')

const thanksMessage = document.createElement('div')
thanksMessage.setAttribute('id', 'thanks')
thanksMessage.classList.add('thanks-message')
thanksMessage.innerHTML = `
    <h2>¡GRACIAS POR TU COMPRA!</h2>
`
notifications.appendChild(thanksMessage)
// ABRIR CARRITO AL AGREGARLE UN ITEM

export const openCart = () => {
  cartOverlay.classList.add('cart__show')
}

// ABRIR Y CERRAR CARRITO SI NO ESTA VACIO

toggleCartBtn.addEventListener('click', () => {
  if (document.getElementById('cart-item-count').textContent === 0) {
    emptyMessage.classList.toggle('empty-message__show')
  } else {
    cartOverlay.classList.toggle('cart__show')
  }
})

// CERRAR CARRITO

closeCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('cart__show')
})

// ABRIR Y CERRAR MENSAJE "GRACIAS POR TU COMPRA"

checkOut.addEventListener('click', () => {
  localStorage.removeItem('cart')
  cartItemCountDOM.textContent = '0'
  cartOverlay.classList.remove('cart__show')
  thanksMessage.classList.add('thanks-message__show')

  setTimeout(function () {
    thanksMessage.classList.remove('thanks-message__show')

    window.location.href = './index.html'
  }, 4000)
})
