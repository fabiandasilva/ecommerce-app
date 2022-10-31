import { getStorageItem, setStorageItem } from './utils.js'

// DECLARAR VARIABLE
let store = getStorageItem('store')

// CONFIGURAR TIENDA
const setupStore = (products) => {
  store = products.map((product) => {
    const { id, name, price, category, color } = product
    return { id, name, price, category, color }
  })
  setStorageItem('store', store)
}

// ENCONTRAR UN PRODUCTO
const findProduct = (id) => {
  const product = store.find((product) => product.id === id)
  return product
}
export { store, setupStore, findProduct }
