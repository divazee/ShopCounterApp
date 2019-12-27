import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleIncrement = counter => {
    console.log("increment", counter)
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter } //clone counter object 
    counters[index].value++
    this.setState({ counters })
  }

  handleDelete = counterID => {
    console.log("deleted!", counterID)
    const newCounters = this.state.counters.filter(c => c.id !== counterID)
    this.setState({ counters: newCounters })
  }

  handleReset = () => {
    console.log("reset")
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({ counters })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          totalCounters = {this.state.counters.length}
        />
        <main className="container">
          <Counters 
            counters = { this.state.counters }
            onIncrement = {this.handleIncrement}
            onDelete = {this.handleDelete}
            onReset = {this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;