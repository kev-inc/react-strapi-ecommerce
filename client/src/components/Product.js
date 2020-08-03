import React, { useEffect, useState } from 'react'
import { getProduct } from '../api/api'

function addToCart(product) {
  let cart = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))
  cart.push(product)
  localStorage.setItem('cart', JSON.stringify(cart))
  alert(product.name + ' added to cart!')
}

function Product(props) {
  const { id } = props.match.params
  const [product, setproduct] = useState(null)
  useEffect(() => {
    getProduct(id).then(res => setproduct(res.data))
  }, [product, id])
  if (product === null) {
    return (
      <div>loading</div>
    )
  }
  return (
    <div>
      <h3>{product['name']}</h3>
      <p>{product['description']}</p>
      <h5>{product['category']['name']}</h5>
      <h5>${product['price']['regularprice']}</h5>
      <h5>Sale: ${product['price']['saleprice']}</h5>
      <h5>Stock: {product['stock']['stockquantity']} in stock</h5>
      {product['images'].map((img, index) => (
        <img src={img.url} alt={img.alternativeText} height='240px' key={index} />
      ))}
      <div>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  )
}
export default Product