import React from 'react'
import Navbar from '../UI/Navbar'

export default function Movies() {
  return (
    <main>
        <section id='movies'>
            <div className="row">
                <Navbar />
                <div className="movies-wrapper">
                    <div className="movies-title">Browse movies</div>
                    <div className="movies-wrapper-searc">
                        <input type="text" placeholder='Search by Name, Make or Keyord ' />
                        <Font
                    </div>
                    
                </div>
            </div>
        </section>
    </main>
    
  )
}
