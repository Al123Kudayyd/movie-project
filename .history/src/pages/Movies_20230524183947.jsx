import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../UI/Navbar'
import { Link } from 'react-router-dom';

export default function Movies() {

    const { title } = useParams()

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)
    const [searchName, setSearchName] = useState(title)

    async function getMovies(title) {
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=80d4fe56&s=${title}`)
        console.log(data)
        setMovies(data.Search)
    }

    function onSearch() {
        getMovies(searchName)
    }
    
    setTimeout(() => {
        setLoading(true)
    }, 1000)

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
                        <input type="text" className='search-bar' placeholder='Search by Name, Make or Keyword'
                         value={searchName}
                        onChange={(event) => setSearchName(event.target.value)} 
                        />
                        <FontAwesomeIcon onClick={() => onSearch()} icon='magnifying-glass' className='movies-search' />
                    </div>
                </div>
            </div>
        </section>
        <div className="movies-main-wrapper">
            {
                {searchName} !== 0 ? 
                <h2 className="movies-main-filter">Search results for <span className='blue'>"{searchName}"</span></h2> 
                : <h2 className='movies-main-filter'>Search results: </h2>
            }
             
            <select id="filter">
                <option value="" disabled selected>Sort</option>
                <option value="LOW_TO_HIGH">Year, Low to High</option>
                <option value="HIGH_TO_LOW">Year, High to Low</option>
                <option value="MOVIES">Movies</option>
                <option value="SERIES">Series</option>
            </select>
        </div>
        <div className="main-movie-wrapper">
        {
            loading ? (movies.map((movie) => (
            
                <Link to={`${title}/${}`}>
                    <div className="main-movie">
                        <div className="movie-wrapper">
                            <img src={movie.Poster} alt="" className="movie-img" />
                            <p className="movie-title">{movie.Title}</p>
                            <div className="model-wrapper">
                                <FontAwesomeIcon icon='clone' />
                                <p className="clone">{movie.Type}</p>
                            </div>
                            <div className="model-wrapper">
                                <FontAwesomeIcon icon='calendar' />
                                <p className="clone">{movie.Year}</p>
                            </div>
                            <div className="model-wrapper">
                                <FontAwesomeIcon icon='tags' />
                                <p className="clone">{movie.imdbID}</p>
                            </div>
                        </div>
                    </div>
                </Link> 
            
            ))) : (<div className='skeleton-spinner'>
            <FontAwesomeIcon icon='spinner' className='spinner' />
        </div>)
        }
        </div>
    </main>
    
  )
}
