import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../UI/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';

export default function Cars() {

  const [cars, setCars] = useState([]); 
  const [searchName, setSearchName] = useState(name);
  
  const { name } = useParams()

  function onSearch() {
    console.log('search')
  }

  async function getCars() {
    const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=3e84448d/${name}`)
    setCars(data)
    console.log(data)
    
    
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
                        <input className='car-input' value={searchName} onChange={(event) => setSearchName(event.target.value)}  type="text" placeholder='Search by Model, Make or Keyword ' />
                        <FontAwesomeIcon className='car-search-btn' onClick={() => onSearch()} icon='magnifying-glass' />
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
                            <img className='car-img' src={car.img_url} alt="" />
                        </figure>
                        <h2 className="car-container-brand"><span className='blue'>{car.name}</span></h2>
                        <div className='car-power-wrapper'>
                            <FontAwesomeIcon icon='gauge-high' />
                            <p className="car-power">{car.avg_horsepower}</p>
                        </div>
                        <div className="car-price-wrapper">
                            <FontAwesomeIcon icon='tags' />
                            <p className="car-price">{car.avg_price}</p>
                        </div>
                        <div className="car-model-wrapper">
                            <FontAwesomeIcon icon='clone' />
                            <p className="car-models">{car.num_models}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        
        
    </main>
    
  )
}
