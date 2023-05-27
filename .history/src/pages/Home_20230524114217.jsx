import React, { useState } from 'react'
import Navbar from '../UI/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Car from '../assests/car.png'
import { useNavigate, useParams } from 'react-router-dom';


export default function Home() {
const { name } = useParams() 

   const navigate = useNavigate()
   const [loading, setLoading] = useState(false);
   const [search, setSearch] = useState('');

   console.log(search)
   
        
   function onLoad() {
    setTimeout(() => {
        setLoading(true)
    }, 200)
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

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


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
                                <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Search by Model, Make or Keyword ' />
                                
                                {
                                 loading ? <div className='search-btn1'><FontAwesomeIcon icon='spinner' className='spinner'  /></div> : <FontAwesomeIcon onClick={() => onLoad()} className='search-btn' icon='magnifying-glass' />
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
