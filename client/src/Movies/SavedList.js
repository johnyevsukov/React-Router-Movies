import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

export default function SavedList(props) {
  return (
    <div className="saved-list">
      {/* {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))} */}
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Link to='/'>
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
