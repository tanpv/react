import React, {Component} from 'react';
import '../css/styles.css'



class Header extends Component {

  state = {
    keywords:'hello'
  }

  inputChangeHandler(event){
    this.setState({
      keywords: event.target.value
    })
  }
  
  render(){
    console.log(this.state.keywords)
    return (
      <header>
        <div className="logo"
        >Logo</div>
        <input type="text"
        onChange={(event)=> this.inputChangeHandler(event)}/>
      </header>
    )
  }
}

export default Header;
