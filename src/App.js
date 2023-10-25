import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

const handleGameplay = (index) => {

  let updatedSquares = [...squares]

  if (squares[index] === null) {
    updatedSquares[index] = "❌"
    setSquares(updatedSquares)
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