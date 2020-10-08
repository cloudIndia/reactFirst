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
      news : JSON,
      filterd : JSON
    }
  }
  
  filterNews =(keyWord)=>{
        console.log("--->",keyWord)
        let filterd = this.state.news.filter((data)=>{
          return data.title.toLowerCase().indexOf(keyWord.toLowerCase()) > -1
        })
        this.setState({filterd})
  }
  render(){
    return (
      <div>
        <Header searchData={(data)=>{this.filterNews(data)}}/>
        <NewsList newsValue={this.state.filterd}/>
        <FirstJourney/>
        <SecondJourney/>
      </div>
    )
  }
}

ReactDOM.render(<ThirdJourney/>,document.getElementById('root'));