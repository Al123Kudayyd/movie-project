import React from 'react'

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
