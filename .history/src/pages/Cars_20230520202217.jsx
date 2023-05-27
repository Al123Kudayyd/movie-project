import React from 'react'
import axios from 'axios'

export default function Cars() {

  async function getCars() {
    const data = await axios.get("")
  }
    
  return (
    <section className='cars'>
        <div className="row">

        </div>
    </section>
  )
}
