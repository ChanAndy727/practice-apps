import React from 'react';
import Word from './Word.jsx';

const WordList = (props) => (
  <div>
    <h3> My Words </h3>
    <ul>
      {props.words.map(word => (
        <Word
        word={word}
        key={word}
        />
      ))}
    </ul>
  </div>
)

export default WordList;