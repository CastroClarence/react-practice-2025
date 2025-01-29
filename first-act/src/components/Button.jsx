import React from 'react'

export default function Button({color, setColor}) {
    const handleClick = () => {
        setColor(color)
        console.log({color});
        
    }
  return (
    <button className={`border-1 p-3 rounded ${color}`} style={{color}} onClick={handleClick}>
        {color}
    </button>
  )
}
