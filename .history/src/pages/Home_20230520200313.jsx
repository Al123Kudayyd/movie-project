import React from 'react'
import Navbar from '../UI/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Car from '../assests/car.png'

export default function Home() {
  return (
    <div>
        <Navbar />
        <section id='home'>
            <div className="container">
                <div className="row">
                    <div className="main">
                        <h1 className="main-title">Britain's most awarded <br /> car subscription platform</h1>
                        <h3 className='main-desc'>FIND YOUR DREAM CAR WITH <span className='blue'>AL KHUDAYYD MOTORS</span></h3>
                        <div className="main-wrapper">
                            <div className="man-wrapper-banner"></div>
                            <input type="text" placeholder='Search by Model, Make or Keyword ' />
                            <FontAwesomeIcon icon='magnifying-glass' className='search-btn' />
                            <figure className="main-banner">
                                <img src={Car} alt="" className="main-img" />
                            </figure>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
