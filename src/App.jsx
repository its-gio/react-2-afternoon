import React from 'react';
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data"
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      index: 0,
      data
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Card person={this.state.data[this.state.index]} count={this.state.data.length} />
      </div>
    );
  }
}

export default App;
