import React from 'react'

export default function Modal() {
  return (
    <div>
        <FontAwesomeIcon onClick={() => {
                                        onLoad() ? <FontAwesomeIcon icon='spinner' className='search-btn' /> :
                                        <FontAwesomeIcon icon='magnifying-glass' className='search-btn' />
        }} icon='magnifying-glass' className='search-btn' />
    </div>
  )
}
