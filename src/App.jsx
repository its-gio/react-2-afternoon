import React from 'react';
import Nav from "./components/Nav"
import Card from "./components/Card"
import Add from "./components/Add"
import AddDir from './components/AddDir';
import Directory from './components/Directory';
import './App.css';
import data from "./data"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      index: 0,
      data,
      fullName: "",
      city: "",
      country: "",
      title: "",
      employer: "",
      favoriteMovies: [],
      mode: "normal"
    }
  }

  reIndex(data) {
    data.forEach((person, i) => person.id = (i + 1))
  }
  
  handleDelete = (index) => {
    this.setState(currState => {
      currState.data.splice(index, 1);
      this.reIndex(currState.data)
      return { data: currState.data }
    })
  }

  handleModeChangeAdd = () => {
    this.setState({ mode: "add" })
  }

  handleDir = (way) =>  {
    let result = this.state.index + +way;
    if (result < 0) result = this.state.data.length - 1;
    if (result > this.state.data.length - 1) result = 0;
    return this.setState({ index: result });
  }

  render() {
    console.log(data)
    switch (this.state.mode) {
      case "normal":
        return (
          <div className="App">
            <Nav />
            <Card person={this.state.data[this.state.index]} count={this.state.data.length} />
            <Directory 
              handleDelete={this.handleDelete}
              handleModeChangeAdd={this.handleModeChangeAdd}
              handleDir={this.handleDir}
              index={this.state.index}
            />
          </div>
        );

      case "add":
        return (
          <div className="App">
            <Nav />
            <Add />
            <AddDir />
          </div>
        );

      default:
        return (
          <div className="App">
            <Nav />
            <Card person={this.state.data[this.state.index]} count={this.state.data.length} />
            <Directory 
              handleDelete={this.handleDelete}
              handleDir={this.handleDir}
              index={this.state.index}
            />
          </div>
        );
    }
  }
}

export default App;
