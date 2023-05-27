import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../UI/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Cars() {

  const [cars, setCars] = useState([]);  

  async function getCars() {
    const { data } = await axios.get("https://private-anon-0b00ced666-carsapi1.apiary-mock.com/manufacturers")
    console.log(data)
    
  }

  useEffect(() => {
    getCars()
  })
    
  return (
    <main>
        <section className='cars'>
            <Navbar />
            <div className="row">
                <div className="nav-section">
                    <h1 className="car-title">Browse our cars</h1>
                    <div className="car-selector">
                        <input className='car-input' type="text" placeholder='Search by Model, Make or Keyword ' />
                        <FontAwesomeIcon className='car-search-btn' icon='magnifying-glass' />
                    </div>
                </div>
            </div>
        </section>
        <div className="car-section-wrapper">
            <h2 className="car-subtitle">Search result:</h2>
            <select defaultValue="DEFAULT" id="filter" >
                <option value="DEFAULT" disabled>Sort</option>
                <option value="LOW_TO_HIGH">Low to High</option>
                <option value="HIGH_TO_LOW">High to Low</option>
                <option value="RATING">Rating</option>
            </select> 
        </div>
        <div className="car-container-wrapper">
            <div className="car-container">
                <figure className="car-container-img">
                    <img className='car-img' src="https://www.bmw.co.uk/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Navigation/bmw-m-series-m2-coupe-lci-modelfinder.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1665405919486.png" alt="" />
                </figure>
                <h2 className="car-container-brand"><span className='blue'>bmw</span></h2>
                <div className='car-power-wrapper'>
                    <FontAwesomeIcon icon='gauge-high' />
                    <p className="car-power">380 bph</p>
                </div>
                
                <p className="car-price">$74501</p>
                <p className="car-models">31</p>
            </div>
            <div className="car-container">
                <figure className="car-container-img">
                    <img className='car-img' src="https://www.bmw.co.uk/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Navigation/bmw-m-series-m2-coupe-lci-modelfinder.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1665405919486.png" alt="" />
                </figure>
                <h2 className="car-container-brand"><span className='blue'>bmw</span></h2>
                <div className='car-power-wrapper'>
                    <FontAwesomeIcon icon='gauge-high' />
                    <p className="car-power">380 bph</p>
                </div>
                <div className="car-price-wrapper">
                    
                </div>
                <p className="car-price">$74501</p>
                <p className="car-models">31</p>
            </div>
        </div>
        
    </main>
    
  )
}
