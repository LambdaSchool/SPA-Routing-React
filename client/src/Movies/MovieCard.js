import React from 'react';
import {Link} from 'react-router-dom'

function MovieCard(props) {
  const { title, director, metascore, stars, id } = props.movie;
  return (
    <div className="save-wrapper" key={id}>
    <div className="movie-card">
      <Link to={`/movies/${id}`} ><h2>{title}</h2></Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    <div onClick={props.saveMovie} className="save-button">Save</div>
  </div>
  );
}

export default MovieCard;
