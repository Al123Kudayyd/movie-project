import React, { useEffect } from 'react'
import axios from 'axios'

export default function Cars() {

  const [cars, setCa]  

  async function getCars() {
    const data = await axios.get("https://private-anon-0b00ced666-carsapi1.apiary-mock.com/manufacturers")
    console.log(data)
  }

  useEffect(() => {
    getCars()
  })
    
  return (
    <section className='cars'>
        <div className="row">

        </div>
    </section>
  )
}
