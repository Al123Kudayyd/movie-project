import React from 'react'
import Logo from '../assests/logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="row">
                <div className="nav-wrapper">
                    <img src={Logo} alt="" className="nav-img" />
                    <ul className="nav-wrapper-list"></ul>
                </div>
            </div>
        </div>
    </div>
  )
}
