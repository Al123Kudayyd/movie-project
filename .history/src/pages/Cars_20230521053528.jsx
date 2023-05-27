import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cars() {

  const [cars, setCars] = useState([]);  

  async function getCars() {
    const { data } = await axios.get("https://private-anon-0b00ced666-carsapi1.apiary-mock.com/manufacturers")
    console.log(data)
    
  }

  useEffect(() => {
    getCars()
  })
    
  return (
    <section className='cars'>
        <Nav
        <div className="row">

        </div>
    </section>
  )
}
