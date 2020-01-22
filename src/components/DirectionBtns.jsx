import React from 'react'

const DirectionBtns = (props) => {
  return (
    <React.Fragment>
      <button onClick={() => props.handleDir(props.way)} name={props.name}>{props.dir}</button>
    </React.Fragment>
  )
}

export default DirectionBtns
