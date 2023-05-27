import React from 'react'
import Logo from '../assests/logo.png'
import '../index.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="row">
                <div className="nav-wrapper">
                    <img src={Logo} alt="" className="nav-img" />
                    <ul className="nav-wrapper-lists">
                        <li className='nav-wrapper-list'><a className='nav' href="/">Home</a></li>
                        <li className='nav-wrapper-list'><a href="">Find your car</a></li>
                        <li className='nav-wrapper-list-alt'><a href="">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
