// import dependency
import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Header from './components/header'
import NewsList from './components/news_list'
import JSON from './db.json'
import './components/header'

// create component
class App extends Component {

  state = {
    news: JSON
  }

  render (){
    return (
      <div>
        <Header/>
        <NewsList news={this.state.news}>
        {/* show up as props.children */}
          <h2> 
            The news are:
          </h2>
        </NewsList>
      </div>
    )
  }
}

// rendering
ReactDom.render(<App/>, document.querySelector('#root'));
