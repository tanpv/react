import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside Component will Mount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside Component did Mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] inside component will receive props')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] inside component should update');
  //   console.log(nextProps.person !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked);
  //   return nextProps.person !== this.props.persons;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside component will update');
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] inside component did update');
  }

  render () {
    console.log('[Persons.js] Inside render');
    return (
      this.props.persons.map( (person, index) => {
        return <Person 
        click={() => this.props.clicked(index)} 
        name={person.name} 
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event,person.id)}/>
      })
    )
  }
}

export default Persons;