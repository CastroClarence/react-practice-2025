import React from 'react'
import { useState, useEffect } from 'react'
import Square from './Square'

function Board({xIsNext, handlePlay, calculateWinner}) {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [value, setValue] = useState('')
    const [status, setStatus] = useState('')

    const handleClick = (n) => {
        if (calculateWinner(squares) || squares[n]) {
            return; // Stop if the game is won or square is already filled
        }
        console.log(n)
        const newSqaures = squares.slice()
        newSqaures[n] = xIsNext ? 'X' : 'O'
        setSquares(newSqaures)
    }
    
    useEffect(() => {
        handlePlay(squares)
        if (calculateWinner(squares)){
            setStatus(`Winner ${calculateWinner(squares)}`)
        }
        console.log(squares)
    },[squares]);

  return (
    <div className='border-1 p-5 flex'>
        <p>{status}</p>
        <div>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
    </div>
  )
}

export default Board
