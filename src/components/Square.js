import React from 'react'

const Square = (props) => {

  const handleClick = () => {
    if(props.disablePlay === false) {
      props.handleGameplay(props.index)
    }
  }

  return (
    <div className="square" onClick={handleClick}>
    {props.value} 
    </div>
  )
}
export default Square
