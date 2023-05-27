import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Navbar from '../UI/Navbar'

export default function Movies() {
  return (
    <main>
        <section id='movies'>
            <div className="row">
                <Navbar />
                <div className="movies-wrapper">
                    <h1 className="movies-title">Browse movies</h1>
                    <div className="movies-wrapper-searc">
                        <input type="text" placeholder='Search by Name, Make or Keyword ' />
                        <FontAwesomeIcon icon='magnifying-glass' />
                    </div>
                    
                </div>
            </div>
        </section>
    </main>
    
  )
}
