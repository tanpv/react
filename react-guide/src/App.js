import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name:"Max", age:28 },
      { name:"Manu", age:29 },
      { name:"Stephannie", age:26 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name:newName, age:28 },
        { name:"Manu", age:29 },
        { name:"Stephannie", age:26 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age:28 },
        { name: event.target.value, age:29 },
        { name: "Stephannie", age:26 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> hello world </h1>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>

        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}>My Hobbies: Racing </Person> 
        
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
