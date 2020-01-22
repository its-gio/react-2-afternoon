import React from 'react'
import DirectionBtns from './DirectionBtns'

const Directory = (props) => {
  return (
    <div className="directory">
      <DirectionBtns handleDir={props.handleDir} way="-1" dir="< Previews" />
      <DirectionBtns handleDir={props.handleDir} way="1" dir="Next >" />
    </div>
  )
}

export default Directory
