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
                        <li className='nav-wrapper-list'><a className='nav-link link' href="/">Home</a></li>
                        <li className='nav-wrapper-list'><a className='nav-link link' href="/cars">Find your movie</a></li>
                        <li className='nav-wrapper-list-alt'><a className='nav-link-alt' href="" onClick={() => alert('This feature is unavailable')}>CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
