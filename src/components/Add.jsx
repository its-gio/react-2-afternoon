import React from 'react'

class Add extends React.Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      location: "",
      title: "",
      employer: "",
      favoriteMovies: []
    }
  }

  render() {
    return (
      <React.Fragment>
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

        <div className="directory addDir">
          <button>+ Add</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Add