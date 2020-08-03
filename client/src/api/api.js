import axios from 'axios'
const baseURL = 'http://localhost:1337'

// store
export function getProducts() {
  return axios.get(baseURL + '/products')
}

// product
export function getProduct(id) {
  return axios.get(baseURL + '/products/' + id)
}

// about
export function getAboutpage() {
  return axios.get(baseURL + '/aboutpage')
}