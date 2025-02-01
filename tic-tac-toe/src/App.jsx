import { useState, useEffect } from 'react'
import Board from './components/Board'

function App() {
  const [xIsNext, setXisNext] = useState(true)
  const [moves, setMoves] = useState([])
  const [moveCount, setMoveCount] = useState(0)

  const handlePlay = (sqaures) => {
    setMoves(sqaures);
    setXisNext(!xIsNext);
    setMoveCount(moveCount + 1);
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  useEffect(() => {
    console.log(moves); 
  }, [moves])

  return (
    <>
    <div>
      <h1 className='text-2xl font-bold'>Tic Tac Toe App</h1>
      <div>
        <Board xIsNext={xIsNext} handlePlay={handlePlay} calculateWinner={calculateWinner}/>
      </div>
    </div>
    </>
  )
}

export default App
