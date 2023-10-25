import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  // Created variable to keep track of whose turn it is
  const [turnTracker, setTurnTracker] = useState(1)

  const calculateWinner = (squares) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
      [0, 4, 8], [2, 4, 6]              // Diagonals
    ]

    for (let i=0; i<winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        alert(`${squares[a]} won the game!`)
      }
    }
  }

  const handleGameplay = (index) => {

    let updatedSquares = [...squares]

    if (squares[index] === null && turnTracker%2 === 1) {
      updatedSquares[index] = "❌"
      setSquares(updatedSquares)
      setTurnTracker(turnTracker + 1)
      calculateWinner(squares)
    } else if (squares[index] === null && turnTracker%2 === 0) {
      updatedSquares[index] = "⭕️"
      setSquares(updatedSquares)
      setTurnTracker(turnTracker + 1)
      calculateWinner(squares)
    }
    
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
      {squares.map((value, index) => {
        return (
        <Square
        value={value}
        key={index}
        index={index}
        handleGameplay={handleGameplay} />
        )
      })}
      </div>
    </>
  )
}

export default App