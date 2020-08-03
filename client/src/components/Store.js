import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/api'
import { Link } from 'react-router-dom'

function Store() {
  const [products, setproducts] = useState([])
  useEffect(() => {
    getProducts().then(res => setproducts(res.data))
  }, [products])
  return (
    <div>
      <h3>Store</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Store