import React from 'react'
import {postOrder} from '../api/api'

function clearCart() {
  localStorage.removeItem('cart')
  window.location.reload()
}

function placeOrder(e, cart) {
  e.preventDefault()
  const fname = e.target.fname.value
  const lname = e.target.lname.value
  const add1 = e.target.addline1.value
  const add2 = e.target.addline2.value
  const pcode = e.target.pcode.value
  const phone = e.target.phone.value 
  const email = e.target.email.value 
  const notes = e.target.notes.value
  const postData = {
    name: {
      '__component': 'order.name',
      'firstname': fname,
      'lastname': lname
    },
    address: {
      '__component': 'order.address',
      'addressline1': add1,
      'addressline2': add2,
      'country': 'Singapore',
      'postalcode': pcode
    },
    phone: phone,
    email: email,
    notes: notes,
    products: cart,
    totalprice: cart.map(item => item['price']['regularprice']).reduce((total, item) => total + item), // TODO: check for sale price
    status: 'pendingpayment'
  }
  postOrder(postData).then(() => {
    alert('Order sent!')
    clearCart()
  }).catch(err => alert(err))
}
function Cart() {
  let cart = localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart'))
  if(cart.length === 0) {
    return(
      <div>Nothing to see here...</div>
    )
  }
  return(
    <div>
      <h3>Cart</h3>
      <ol>
      {cart.map((item, index) => (
        <li key={index}>{item.name} (${item['price']['regularprice']})</li>
      ))}
      </ol>
      <h5>Total: ${cart.map((item, index) => item['price']['regularprice']).reduce((total, item) => total + item)}</h5>
      <button onClick={() => clearCart()}>Clear cart</button>
      <h3>Personal Information</h3>
      <form onSubmit={e => placeOrder(e, cart)}>
        <label for="fname">First name:</label><br/>
        <input type="text" id='fname' name='fname'/><br/>
        
        <label for="lname">Last name:</label><br/>
        <input type="text" id='lname' name='lname'/><br/>

        <label for="addLine1">Address:</label><br/>
        <input type="text" id='addline1' name='addline1'/><br/>
        <input type="text" id='addline2' name='addline2'/><br/>

        <label for="pcode">Postal code:</label><br/>
        <input type="text" id='pcode' name='pcode'/><br/>
        
        <label for="phone">Phone:</label><br/>
        <input type="text" id='phone' name='phone'/><br/>
        
        <label for="email">Email:</label><br/>
        <input type="text" id='email' name='email'/><br/>
        
        <label for="notes">Additional notes:</label><br/>
        <textarea id='notes' name='notes'/><br/>

        <button type='submit'>Place order</button>
        
      </form>
    </div>
  )
}
export default Cart