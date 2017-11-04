import React, { Component } from 'react';
import BookList from '../containers/booklist';
import Detail from '../containers/detail';

export default class App extends Component {
  render() {
    return (
      <div className="div">
        <BookList />
        <Detail />
      </div>
    );
  }
}
