import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [turnTracker, setTurnTracker] = useState(1)

const handleGameplay = (index) => {

  let updatedSquares = [...squares]

  if (squares[index] === null && turnTracker%2 === 1) {
    updatedSquares[index] = "❌"
    setSquares(updatedSquares)
    setTurnTracker(turnTracker + 1)
  } else if (squares[index] === null && turnTracker%2 === 0) {
    updatedSquares[index] = "⭕️"
    setSquares(updatedSquares)
    setTurnTracker(turnTracker + 1)
  }
}

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
      {squares.map((value, index) => {
        return (
        <Square value={value}
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