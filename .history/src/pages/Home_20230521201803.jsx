import React, { useState } from 'react'
import Navbar from '../UI/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Car from '../assests/car.png'
import { useNavigate, useParams } from 'react-router-dom';

export default function Home() {
const { name } = useParams() 

   const navigate = useNavigate()
   const [loading, setLoading] = useState(true)
   
   setTimeout(() => {
    setLoading(false)
   }, 600)
        
  function goSearch() {
    console.log('goSearch')
  }  

  return (
    <div>
        <Navbar />
        <section id='home'>
            <div className="container">
                <div className="row">
                    <div className="main">
                        <h1 className="main-title">Britain's most awarded <br /> car subscription platform</h1>
                        <h3 className='main-desc'>FIND YOUR DREAM CAR WITH <span className='blue'>AL KHUDAYYD MOTORS</span></h3>
                        <div className="main-container">
                            <div className="main-wrapper">
                                <input type="text" placeholder='Search by Model, Make or Keyword ' />
                                {

                                    loading ? (<FontAwesomeIcon icon='spinner' className='search-btn' />) 
                                    
                                }
                                
                            </div>
                            <div className="main-banner">
                                <img src={Car} alt="" className="main-img" />
                                <img src={Car} alt="" className="main-img" />
                                <img src={Car} alt="" className="main-img" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
