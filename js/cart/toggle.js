/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
const cartOverlay = document.getElementById('cart-overlay')
const toggleCartBtn = document.getElementById('toggle-cart')
const closeCartBtn = document.getElementById('close-cart')
const checkOut = document.getElementById('checkout')
const cartItemCountDOM = document.getElementById('cart-item-count')

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
  setTimeout(function () {
    window.location.href = './index.html'
  }, 4000)
})
