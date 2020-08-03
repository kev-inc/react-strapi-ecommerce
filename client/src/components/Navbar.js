import React from 'react'
import { Link } from 'react-router-dom'

const padRight = {
  paddingRight: '24px'
}

function Navbar() {
  return(
    <div>
      <Link to='/' style={padRight}>Home</Link>
      <Link to='/store' style={padRight}>Store</Link>
      <Link to='/about' style={padRight}>About</Link>
      <Link to='/contact' style={padRight}>Contact</Link>
      <Link to='/cart' style={padRight}>Cart</Link>
    </div>
  )
}
export default Navbar