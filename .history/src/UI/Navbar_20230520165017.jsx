import React from 'react'
import Logo from '../assests/logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="row">
                <div className="nav-wrapper">
                    <img src={Logo} alt="" className="nav-img" />
                    <ul className="nav-wrapper-list">
                        <li className=''><a href="/">Home</a></li>
                        <li><a href="">Find your car</a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
