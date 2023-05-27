import React, { useEffect, useState } from 'react'
import Navbar from '../UI/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Movie from '../assests/movie.png'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function Home() {
const { title } = useParams() 

   const navigate = useNavigate()
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(false);
   const [search, setSearch] = useState(title);

   console.log(search)
   
   async function getMovies() {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=80d4fe56&s=${title}`)
    console.log(data)
    setMovies(data.Search)

    }

    useEffect(() => {
        getMovies()
    }, [])
        
   function onLoad() {
    navigate(`/`)
    setTimeout(() => {
        setLoading(true)
    }, 200)
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
                        <h1 className="main-title">Britain's most awarded <br /> movie subscription platform</h1>
                        <h3 className='main-desc'>FIND YOUR DREAM CAR WITH <span className='blue'>AL KHUDAYYD MOTORS</span></h3>
                        <div className="main-container">
                            <div className="main-wrapper">
                                <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Search by Model, Make or Keyword ' />
                                
                                {
                                 loading ? <div className='search-btn1'><FontAwesomeIcon icon='spinner' className='spinner'  /></div> : <FontAwesomeIcon onClick={() => onLoad()} className='search-btn' icon='magnifying-glass' />
                                } 
                            </div>
                            <div className="main-banner">
                                <img src={Movie} alt="" className="main-img" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
