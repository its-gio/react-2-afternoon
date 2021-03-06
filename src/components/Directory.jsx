import React from 'react'
import DirectionBtns from './DirectionBtns'

const Directory = (props) => {
  return (
    <div className="directory">
      <DirectionBtns handleDir={props.handleDir} way="-1" dir="< Previews" />
      <div className="manipBtns">
        <button >Edit</button>
        <button onClick={() => props.handleDelete(props.index)}>Delete</button>
        <button onClick={() => props.handleModeChange("add")}>New</button>
      </div>
      <DirectionBtns handleDir={props.handleDir} way="1" dir="Next >" />
    </div>
  )
}

export default Directory
