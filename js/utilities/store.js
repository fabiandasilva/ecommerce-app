/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
import API from '../service/api.js'
import { getStorageItem } from './utils.js'

// DECLARAR VARIABLE
let store = getStorageItem('store')

// ENCONTRAR UN PRODUCTO
const findProduct = (id) => {
  let product = store.find((product) => product.id == id)
  return product
}
// DECLARO UNA FUNCION PARA CONFIGURAR LA TIENDA CON MI API
function findStoreAndFilterApi () {
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      store = data.map((product) => {
        const { id, name, price, category, color, img } = product
        return { id, name, price, category, color, img }
      })

      console.log(store)
    })
    .catch((err) => console.log(err))
}
findStoreAndFilterApi()

export { store, findProduct }
