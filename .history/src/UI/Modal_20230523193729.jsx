import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Modal({ onLoad }) {
  return (
    <div>
        <FontAwesomeIcon onClick={onLoad} className='search-btn' icon='magnifying-glass' />
    </div>
  )
}
