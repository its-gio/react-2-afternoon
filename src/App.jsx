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

  handleDir = (way) =>  {
    let result = this.state.index + +way;
    if (result < 0) result = this.state.data.length - 1;
    if (result > 24) result = 0;

    this.setState({ index: result });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Card person={this.state.data[this.state.index]} count={this.state.data.length} />
        <Directory handleDir={this.handleDir} />
      </div>
    );
  }
}

export default App;
