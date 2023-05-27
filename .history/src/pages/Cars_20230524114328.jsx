import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../UI/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';

export default function Cars() {

  const [cars, setCars] = useState([]); 
  const [searchName, setSearchName] = useState();
  
  const { name } = useParams()

  function onSearch() {
    console.log('search')
  }
 
  const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('inputurl', 'https://lmcpro.oss-cn-hangzhou.aliyuncs.com/sample/vmmr2.jpeg?x-oss-process=image/resize,p_50');

const options = {
  method: 'POST',
  url: 'https://vehicle-make-and-model-recognition.p.rapidapi.com/v1',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '81a8f0489bmsha770f58cd522d54p1254c1jsn4e531f74da94',
    'X-RapidAPI-Host': 'vehicle-make-and-model-recognition.p.rapidapi.com'
  },
  data: encodedParams,
};

function get

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

  async function getCars() {
    const { data } = await axios.get("https://www.omdbapi.com/?apikey=80d4fe56&s=cars")
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
                            <img className='car-img' src={car.Poster} alt="" />
                        </figure>
                        <h2 className="car-container-brand"><span className='blue'>{car.Title}</span></h2>
                        <div className='car-power-wrapper'>
                            <FontAwesomeIcon icon='gauge-high' />
                            <p className="car-power">{car.imdbID}</p>
                        </div>
                        <div className="car-price-wrapper">
                            <FontAwesomeIcon icon='tags' />
                            <p className="car-price">{car.Year}</p>
                        </div>
                        <div className="car-model-wrapper">
                            <FontAwesomeIcon icon='clone' />
                            <p className="car-models">{car.Type}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        
        
    </main>
    
  )
}
