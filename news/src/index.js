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
    news: JSON,
    filtered:[]
  }

  getKeyword = (event) => {
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keyword) > -1
    })
    this.setState({
      filtered:filtered
    })
  }

  render (){
    let filtered = this.state.filtered
    let all = this.state.news
    return (      
      <div>
        <Header keywords={this.getKeyword}/>
        <NewsList news={filtered.length === 0 ? all : filtered }>
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
