import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../UI/Navbar'

export default function Movies() {

    const [movies, setMovies] = useState([]);

    async function getMovies() {
        const { data } = await axios.get("https://www.omdbapi.com/?apikey=80d4fe56&s=marvel")
        console.log(data)
    }

    useEffect(() => {
        getMovies()
    }, [])

  return (
    <main>
        <section id='movies'>
            <div className="row">
                <Navbar />
                <div className="movies-wrapper">
                    <h1 className="movies-title">Browse movies</h1>
                    <div className="movies-wrapper-search">
                        <input type="text" className='search-bar' placeholder='Search by Name, Make or Keyword ' />
                        <FontAwesomeIcon icon='magnifying-glass' className='movies-search' />
                    </div>
                </div>
            </div>
        </section>
        <div className="movies-main-wrapper">
            <h2 className="movies-main-filter">Search results:</h2>
            <select id="filter">
                <option value="" disabled selected>Sort</option>
                <option value="LOW_TO_HIGH">Year, Low to High</option>
                <option value="HIGH_TO_LOW">Year, High to Low</option>
                <option value="MOVIES">Movies</option>
                <option value="SERIES">Series</option>
            </select>
        </div>
        {
            movies.map((map) => (
            <div className="main-movie-wrapper">
            <div className="main-movie">
                <div className="movie-wrapper">
                    <img src="https://m.media-amazon.com/images/M/MV5BZmQ3OTZkNDUtNTU0Mi00ZjE4LTgyNTUtY2E4NWRmNDUxMzkyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg" alt="" className="movie-img" />
                    <p className="movie-title">Ms. Marvel</p>
                    <div className="model-wrapper">
                        <FontAwesomeIcon icon='clone' />
                        <p className="clone">Series</p>
                    </div>
                    <div className="model-wrapper">
                        <FontAwesomeIcon icon='calendar' />
                        <p className="clone">2022</p>
                    </div>
                    <div className="model-wrapper">
                        <FontAwesomeIcon icon='tags' />
                        <p className="clone">tt10857164</p>
                    </div>
                </div>
            </div>
            </div>
            ))
        }
        
    </main>
    
  )
}
