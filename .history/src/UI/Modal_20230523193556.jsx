import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Modal({ onLoad, offLoad }) {
  return (
    <div>
        <FontAwesomeIcon onClick={on} className='search-btn' icon='magnifying-glass' />
    </div>
  )
}
