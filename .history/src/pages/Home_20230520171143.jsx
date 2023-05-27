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
                        <h1 className="main-title">Britain's most awarded </h1>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
