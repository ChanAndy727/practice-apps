import React from 'react';

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <li>
        {this.props.word.value}:
        {'\n' + this.props.word.define}
      </li>
    )
  }
}
export default Word;