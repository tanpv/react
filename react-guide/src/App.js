import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  // state and data of the app
  state = {
    persons: [
      { id:'aeb', name:"Manu", age:29 },
      { id:'ghk', name:"Max", age:28 },
      { id:'12d', name:"Stephannie", age:26 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    // find index with id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // copy the object by spearding operator
    const person = {
      ...this.state.persons[personIndex]
    };

    // reset name
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    // reset state
    this.setState( {persons: persons} );
  }

  // change state when click to button
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // change part of state
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    // reder content with condition
    if (this.state.showPersons)
    {
      // assign to JSX
      persons = (
        <div>
          {/* map one person data to one person jsx */}
          {this.state.persons.map( (person, index) => {
            return <Person 
            // handler with parameter
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event,person.id)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> This is really working! </h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
