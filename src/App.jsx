import React from 'react';
import Nav from "./components/Nav"
import Card from "./components/Card"
import Add from "./components/Add"
import Directory from './components/Directory';
import './App.css';
import data from "./data"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      index: 0,
      data,
      mode: "normal"
    }
  }

  handleDelete = (index) => {
    this.setState(currState => {
      currState.data.splice(index, 1);
      return { data: currState.data }
    })
  }

  handleAdd = (newPerson) => {
    this.setState({ data: [...this.state.data, newPerson] })
    this.handleModeChange("normal")
  }

  handleModeChange = (mode) => {
    this.setState({ mode })
  }

  handleDir = (way) =>  {
    let result = this.state.index + +way;
    if (result < 0) result = this.state.data.length - 1;
    if (result > this.state.data.length - 1) result = 0;
    return this.setState({ index: result });
  }

  render() {
    switch (this.state.mode) {
      case "normal":
        return (
          <div className="App">
            <Nav />
            <Card person={this.state.data[this.state.index]} index={this.state.index} count={this.state.data.length} />
            <Directory 
              handleDelete={this.handleDelete}
              handleModeChange={this.handleModeChange}
              handleDir={this.handleDir}
              index={this.state.index}
            />
          </div>
        );

      case "add":
        return (
          <div className="App">
            <Nav />
            <Add handleAdd={this.handleAdd} count={this.state.data.length} handleModeChange={this.handleModeChange} />
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
