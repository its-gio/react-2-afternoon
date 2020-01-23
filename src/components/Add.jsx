import React from 'react'

class Add extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="card">
        <span onClick={() => this.props.handleModeChange("normal")} className="exitAdd">X</span>
        <input type="text" placeholder="First & Last Name"/>
        <p><strong>From:</strong> <input type="text" placeholder="City, Country" /></p>
        <p><strong>Job Title:</strong> <input type="text" placeholder="Job Title"/></p>
        <p><strong>Employer:</strong> <input type="text" placeholder="Employer"/></p>
        <p><strong>Favorite Movies:</strong></p>
        <ol>
          <input type="text"/>
        </ol>
      </div>
    )
  }
}

export default Add