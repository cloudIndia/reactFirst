import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//Component
import Header from './component/header'
import NewsList from './component/news_list'

//data
import JSON from './db.json';

const FirstJourney = () => {
  return (
    <h1> Hello Hero </h1>
  )
}

const SecondJourney = () => {
  return (
    <input type="text" placeholder="please insert your name" />
  )
}

class ThirdJourney extends Component{
  constructor(props){
    super(props);

    this.state = {
      news : JSON
    }
  }
  render(){
    return (
      <div>
        <Header/>
        <NewsList newsValue={this.state.news}/>
        <FirstJourney/>
        <SecondJourney/>
      </div>
    )
  }
}

ReactDOM.render(<ThirdJourney/>,document.getElementById('root'));