import React from "react";
import { render } from "react-dom";
import axios from 'axios'
import Search from './components/Search.jsx'
import WordList from './components/WordList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }
    this.search = this.search.bind(this);
  }
  componentDidMount() {
    axios.get('/words')
      .then((data)=>{
        this.setState({
          words: data.data
        })
      })
  }

  search (term) {
    axios.post('/words', {term: term})

    // axios.get('/words')
    //   .then((data)=>{
    //     this.setState({
    //       words: data.data
    //     })
    //   })
  }

  render() {
    return (
      <div>
        <h1>Glossary</h1>
        <Search onSearch = {this.search}/>
        <WordList words = {this.state.words}/>
      </div>
    )
  }



}

render(
  <App/>,
  document.getElementById("app")
);
