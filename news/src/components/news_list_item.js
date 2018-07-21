import React from 'react'

const NewsItem = (props) => {
  console.log(props)
  return (
    <div>
      <h3>{props.item.title}</h3>
      <div>
        {props.item.feed}
      </div>
    </div>
  )
}

export default NewsItem



