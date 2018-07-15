// always import React inside component
import React from 'react';
// import component css
import Person from './Person.css';

// component communicate with app by props
const person = (props) => {

  // return jsx inside ()
  return (
    // set style with className
    <div className="Person">
      {/* event handle with onClick */}
      <p onClick={props.click}> I'm a {props.name} and I am {props.age} years old !</p>
      <p> {props.children} </p>
      {/* set property by using props */}
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

// export component to outside
export default person;