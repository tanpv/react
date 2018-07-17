// always import React inside component
import React, {Component} from 'react';
// import component css
import classes from './Person.css';

// component communicate with app by props
class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside Component will Mount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside Component did Mount');
  }


  render () {
    console.log('[Person.js] inside render');
    
    return (
      // set style with className
      <div className={classes.Person}>
        {/* event handle with onClick */}
        <p onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} years old !</p>
        <p> {this.props.children} </p>
        {/* set property by using props */}
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    )

    // return [
    //   <p key="1" onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} years old !</p>,
    //   <p key="2" > {this.props.children} </p>,
    //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
    // ]
  }
}

// export component to outside
export default Person;