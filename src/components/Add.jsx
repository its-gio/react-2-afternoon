import React from 'react'

const Add = (props) => {
  return (
    <div className="card">
      <input type="text" placeholder="First Name"/> <input type="text" placeholder="Last Name"/>
      <p><strong>From:</strong> <input type="text" placeholder="City" />, <input type="text" placeholder="Country"/></p>
      <p><strong>Job Title:</strong> <input type="text"/></p>
      <p><strong>Employer:</strong> <input type="text"/></p>
      <p><strong>Favorite Movies:</strong></p>
      <ol>
        <input type="text"/>
      </ol>
    </div>
  )
}

export default Add