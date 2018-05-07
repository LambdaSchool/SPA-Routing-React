import React, { Component } from 'react';

import { NavLink, Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink 
            key={movie.id} 
            to={`/movies/${movie.id}`} 
            style={{textDecoration: 'none', color: 'inherit'}}
            activeStyle={{
              fontWeight: 'bold'
             }}
          >
            <span className="saved-movie">
              {movie.title}
            </span>
          </NavLink>
        ))}
        <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}><div className="home-button">Home</div></Link>
      </div>
    );
  }
}
