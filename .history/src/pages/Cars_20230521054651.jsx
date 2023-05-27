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
    <section className='cars'>
        <Navbar />
        <div className="row">
            <div className="nav-section">
                <h1 className="car-title">Browse our cars</h1>
                <div className="car-selector">
                    <input type="text" placeholder='Search by Model, Make or Keyword ' />
                    <FontAwesomeIcon className='' icon='magnifying-glass' />
                </div>
            </div>
        </div>
    </section>
  )
}
