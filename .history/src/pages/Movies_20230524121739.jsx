import React from 'react'
import Navbar from '../UI/Navbar'

export default function Movies() {
  return (
    <main>
        <section id='movies'>
            <div className="row">
                <Navbar />
                <div className="movies-wrapper">
                    <div className="movies-title"></div>
                </div>
            </div>
        </section>
    </main>
    
  )
}
