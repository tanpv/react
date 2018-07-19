// import dependency
import React from 'react';
import ReactDom from 'react-dom';
import './components/header';
import Header from './components/header';

// create component
const App = () => {
  return (
    <div>
      <Header/>
    </div>
  )
}

// rendering
ReactDom.render(<App/>, document.querySelector('#root'));
