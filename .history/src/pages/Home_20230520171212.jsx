import React from 'react'
import Navbar from '../UI/Navbar'

export default function Home() {
  return (
    <div>
        <Navbar />
        <section id='home'>
            <div className="container">
                <div className="row">
                    <div className="main">
                        <h1 className="main-title">Britain's most awarded car subscription platform</h1>
                        <h3>Find your </h3>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
