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

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleAddParsing = () => {
    let { fullName, location, title, employer } = this.state;
    let fullNameSplit = fullName.split(" ");
    let locationSplit = location.split(", ");
    let first = fullNameSplit[0];
    let last = fullNameSplit[1];
    let city = locationSplit[0];
    let country = locationSplit[1];

    let newPerson = {
      id: this.props.count + 1,
      name: {
        first,
        last
      },
      city,
      country,
      employer,
      title
    }

    this.props.handleAdd(newPerson);
  }

  addMovie = (e) => {
    // e.target.name
    let result = this.state.favoriteMovies.push(e.target.value);

    console.log(result)
  }

  addTypeBar = () => {
    if (this.state.favoriteMovies.length > 3) return;
    this.setState({ favoriteMovies: [...this.state.favoriteMovies, ""] })
  }

  render() {
    return (
      <React.Fragment>
        <div className="card">
          <span onClick={() => this.props.handleModeChange("normal")} className="exitAdd">X</span>
          <input onChange={this.handleInput} name="fullName" type="text" placeholder="First & Last Name"/>
          <p><strong>From:</strong> <input onChange={this.handleInput} name="location" type="text" placeholder="City, Country" /></p>
          <p><strong>Job Title:</strong> <input onChange={this.handleInput} name="title" type="text" placeholder="Job Title"/></p>
          <p><strong>Employer:</strong> <input onChange={this.handleInput} name="employer" type="text" placeholder="Employer"/></p>
          <p><strong>Favorite Movies:</strong> <span onClick={this.addTypeBar} className="addMovie">+</span></p>
          <ol>
            {
              this.state.favoriteMovies.map((el, i) => <input key={i} name={`${i}`} onBlur={this.addMovie} className="movieInput" placeholder="Movie Title" type="text"/>)
            }
          </ol>
        </div>

        <div className="directory addDir">
          <button onClick={this.handleAddParsing}>+ Add</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Add