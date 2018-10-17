import React, { Component } from 'react';
import {Router, Route, Link} from "./../node_modules/react-router-dom";
// import ReactDom from "./../node_modules/react-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route path="/" component={MovieList} />
          <Route path="/movies:id" component={Movie} />
        </div>
      </div>
    );
  }
}
