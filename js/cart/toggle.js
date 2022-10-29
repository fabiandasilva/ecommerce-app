/* eslint-disable eqeqeq */
/// /////////////////
// TOGGLE CARRITO //
/// /////////////////

// IMPORT ESPECIFICO
/* import { subscribeForm, unsubscribeForm } from '../newsletter/forms.js'; */

// DECLARAR VARIABLES

const cartOverlay = document.getElementById('cart-overlay')
const toggleCartBtn = document.getElementById('toggle-cart')
const closeCartBtn = document.getElementById('close-cart')

// ABRIR

toggleCartBtn.addEventListener('click', () => {
  cartOverlay.classList.toggle('cart__show')
})

// CERRAR CARRITO

closeCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('cart__show')
})
