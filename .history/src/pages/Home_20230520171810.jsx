import React from 'react'
import Navbar from '../UI/Navbar'

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
                            <input type="text" placeholder='Search by Model,  ' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
