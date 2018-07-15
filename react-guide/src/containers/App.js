import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person'


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

    let persons = null;
    let btnClass = '';
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

      btnClass = classes.Red;
    }

    // dynamic style
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <=1) {
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={classes.App}>
        <h1> Hi, I'm a React App </h1>
        <p className={assignedClasses.join(' ')}> This is really working! </p>
        <button
          className={btnClass}
          // assign style dynamically
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
