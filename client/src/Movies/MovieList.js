import React from 'react';
import { Link, useRouteMatch, /*useHistory*/} from 'react-router-dom';


export default function MovieList({movieList}) {
  const { url } = useRouteMatch(); //Matching the url for the individual movie pages?
  console.log("url: ", url); //Here we can see it in the console

  return (
    <div className="movie-list">
      { movieList.map(eachMovie => {
        return <MovieDetails key={eachMovie.id} movie={eachMovie}/>
      }) }
    </div>
  );
}

function MovieDetails(props) {
   //should be eachMovie? --No, because it's a different variable in the MovieList function, here we're importing the movie component
  const { title, director, metascore } = props.movie; 
  //const history = useHistory();
//**string interopolation happens inside backticks not quotations */ //now, below the url is working, so when each card is clicked, it has it's appropriate url
  return (
  <Link to={`/movies/${props.movie.id}`} className='movie-card'> 
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  </Link>
  );
}
