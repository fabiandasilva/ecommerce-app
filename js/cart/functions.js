/* eslint-disable no-return-assign */
/* eslint-disable eqeqeq */

import { findProduct } from '../utilities/store.js'
import { getStorageItem, setStorageItem } from '../utilities/utils.js'
import addToCartDOM from './items.js'
import { openCart } from './toggle.js'
const cartItemCountDOM = document.getElementById('cart-item-count')
const cartItemsDOM = document.getElementById('cart-items')
const cartTotalDOM = document.getElementById('cart-total')

let cart = getStorageItem('cart')

// AÑADIR AL CARRITO

export const addToCart = (id) => {
  const item = cart.find((cartItem) => cartItem.id == id)
  /* console.log(item) */
  if (!item) {
    let product = findProduct(id)
    /*  console.log(product) */
    product = { ...product, amount: 1 }
    cart = [...cart, product]
    addToCartDOM(product)
  } else {
    const amount = increaseAmount(id)
    const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')]
    const newAmount = items.find((value) => value.dataset.id == id)
    newAmount.textContent = amount
  }
  displayCartItemCount()
  displayCartTotal()
  setStorageItem('cart', cart)
  openCart()
}

// MOSTRAR UNIDADES

function displayCartItemCount () {
  const amount = cart.reduce((total, cartItem) => {
    return total += cartItem.amount
  }, 0)
  cartItemCountDOM.textContent = amount
  if (amount == 0) {
    document.getElementById('cart-overlay').classList.remove('cart__show')
  }
};

// MOSTRAR TOTALES

function displayCartTotal () {
  const total = cart.reduce((total, cartItem) => {
    return total += cartItem.price * cartItem.amount
  }, 0)
  const amount = cart.reduce((total, cartItem) => {
    return total += cartItem.amount
  }, 0)
  cartTotalDOM.innerHTML = `
        <span>Cantidad: ${amount}</span>
        <h3>Total ${total}</h3>
    `
};

// MOSTRAR ITEM

function displayCartItemsDOM () {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem)
  })
};

// BORRAR ITEM

function removeItem (id) {
  cart = cart.filter((cartItem) => cartItem.id != id)
};

// INCREMENTAR UNIDADES

function increaseAmount (id) {
  let newAmount
  cart = cart.map((cartItem) => {
    if (cartItem.id == id) {
      newAmount = cartItem.amount + 1
      cartItem = { ...cartItem, amount: newAmount }
    };
    return cartItem
  })
  return newAmount
};

// DISMINUIR UNIDADES

function decreaseAmount (id) {
  let newAmount
  cart = cart.map((cartItem) => {
    if (cartItem.id == id) {
      newAmount = cartItem.amount - 1
      cartItem = { ...cartItem, amount: newAmount }
    };
    return cartItem
  })
  return newAmount
};

// APLICAR FUNCIONALIDADES A BOTONES

function setupCartFunctionality () {
  cartItemsDOM.addEventListener('click', function (e) {
    const element = e.target
    const parent = element.parentElement
    const id = e.target.dataset.id
    const parentID = e.target.parentElement.dataset.id

    // BOTON BORRAR ITEM

    if (element.classList.contains('item__bin')) {
      removeItem(id)
      parent.parentElement.remove()
    };

    // BOTON INCREMENTAR UNIDADES
    if (parent.classList.contains('cart-item-increase-btn')) {
      const newAmount = increaseAmount(parentID)
      parent.previousElementSibling.textContent = newAmount
    };

    // BOTON DISMINUIR UNIDADES

    if (parent.classList.contains('cart-item-decrease-btn')) {
      const newAmount = decreaseAmount(parentID)
      if (newAmount == 0) {
        removeItem(parentID)
        parent.parentElement.parentElement.parentElement.remove()
      } else {
        parent.nextElementSibling.textContent = newAmount
      };
    };

    displayCartItemCount()
    displayCartTotal()
    setStorageItem('cart', cart)
  })
};

// APLICAR FUNCIONALIDADES

const init = () => {
  displayCartItemCount()
  displayCartTotal()
  displayCartItemsDOM()
  setupCartFunctionality()
}
init()
