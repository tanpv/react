import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
      
    // state and data of the app
    this.state = {
      persons: [
        { id:'aeb', name:"Manu", age:29 },
        { id:'ghk', name:"Max", age:28 },
        { id:'12d', name:"Stephannie", age:26 }
      ],
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside Component will Mount');
  }

  componentDidMount() {
    console.log('[App.js] Inside Component did Mount');
  }

  // shouldComponentUpdate( nextProps, nextState) {
  //   console.log('[App.js] Inside Component should update');
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons!==this.state.showPersons;
  //   // return true;
  // }

  componentWillUpdate ( nextProps, nextState ) {
    console.log('[App.js] Inside Component will update');
  }

  componentDidUpdate ( nextProps, nextState ) {
    console.log('[App.js] Inside Component did update');
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

    console.log('App.js inside render')
    let persons = null;
    
    // reder content with condition
    if (this.state.showPersons)
    {
      // assign to JSX
      persons = (
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          />
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={()=>{this.setState({showPersons: true})}}>Show Persons</button>
        
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />

        {persons}
      </div>
    );
  }
}

export default App;
