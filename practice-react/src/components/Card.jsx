import React from 'react'
import PropTypes from 'prop-types'

function Card({name = "Lorem", age = 22}) {
  return (
    <div className='rounded border m-1'>
        <p>
            Name: {name}
        </p>
        <p>
            Age: {age}
        </p>
    </div>
  )
}
export default Card

