import React from 'react';
import Nav from "./components/Nav"
import Card from "./components/Card"
import Directory from './components/Directory';
import './App.css';
import data from "./data"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      index: 0,
      data
    }
  }

  reIndex(data) {
    data.forEach((person, i) => person.id = (i + 1))
  }

  handleDir = (way) =>  {
    let result = this.state.index + +way;
    if (result < 0) result = this.state.data.length - 1;
    if (result > this.state.data.length - 1) result = 0;

    this.setState({ index: result });
  }

  handleDelete = (index) => {
    this.setState(currState => {
      currState.data.splice(index, 1);
      this.reIndex(currState.data)
      return { data: currState.data }
    })
  }

  render() {
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

export default App;
