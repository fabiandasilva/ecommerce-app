/* eslint-disable no-undef */

// GET STORAGE
const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item)
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item))
  } else {
    storageItem = []
  }
  return storageItem
}

// SET STORAGE
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item))
}
// ENCONTRAR UN PRODUCTO

export {
  getStorageItem,
  setStorageItem
}
