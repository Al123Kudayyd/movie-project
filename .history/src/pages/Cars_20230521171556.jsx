import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../UI/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Cars() {

  const [cars, setCars] = useState([]);  

  async function getCars() {
    const { data } = await axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json")
    console.log(data.Results)
    setCars(data)
    
  }

  useEffect(() => {
    getCars();
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
        {
            cars.map((car) => (
                <div className="car-container-wrapper">
                <div className="car-container">
                    <figure className="car-container-img">
                        <img className='car-img' src= alt="" />
                    </figure>
                    <h2 className="car-container-brand"><span className='blue'></span></h2>
                    <div className='car-power-wrapper'>
                        <FontAwesomeIcon icon='gauge-high' />
                        <p className="car-power"></p>
                    </div>
                    <div className="car-price-wrapper">
                        <FontAwesomeIcon icon='tags' />
                        <p className="car-price"></p>
                    </div>
                    <div className="car-model-wrapper">
                        <FontAwesomeIcon icon='clone' />
                        <p className="car-models"></p>
                    </div>
                </div>
            </div>
            ))
        }
        
        
    </main>
    
  )
}
