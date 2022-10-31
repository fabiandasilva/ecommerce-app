import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem('store');

const setupStore = (products) => {
  store = products.map((product) => {
    const { id, name, price, category, color, newIn } = product;
    return { id, name, price, category, color, newIn };
  });
  setStorageItem("store", store);
};
const findProduct = (id) => {
    const product = store.find((product) => product.id === id)
    return product
  }
export{store, findProduct}