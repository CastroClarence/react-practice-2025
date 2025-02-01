import React from 'react'
import { useState } from 'react'

function Square({ value, onSquareClick}) {

  return (
    <>
    <button className='border-1 p-4 rounded max-h-8 flex justify-center items-center max-w-8'
    onClick={onSquareClick}
    >
        <div>
            {value}    
        </div>
    </button>
    </>
  )
}

export default Square
