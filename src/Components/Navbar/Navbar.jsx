import React from 'react'
import"./navbar.css"
import logo from "../../assets/logo.png"
import arrow_icon from "../../assets/arrow_icon.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} className='logo' />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
        </select>
        <button>Sign Up <img src={arrow_icon} /></button>
      </div>
    </div>
  )
}

export default Navbar
