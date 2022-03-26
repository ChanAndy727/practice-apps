import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div>
        <h4>Add more words!</h4>
        Enter word here: <input value={this.state.term}
        onChange={this.handleChange}/>
        <button onClick={this.search}> Add Word </button>
      </div>
    )
  }
}

export default Search;