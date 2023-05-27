import React from 'react'
import Logo from '../assests/logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="row">
                <div className="nav-wrapper">
                    <img src={logo} alt="" className="nav-img" />
                </div>
            </div>
        </div>
    </div>
  )
}
