import React from 'react'
import FaveMovies from './FaveMovies'

const Card = (props) => {
  let { name, city, country, title, employer, favoriteMovies } = props.person
  let movieList = favoriteMovies ? favoriteMovies.map((movie, i) => <FaveMovies key={i} movie={movie} />) : "N/A";
  
  return (
    <div className="card">
      <span className="count">{props.index + 1}/{props.count}</span>
      <h2>{name.first} {name.last}</h2>
      <p><strong>From:</strong> {city}, {country}</p>
      <p><strong>Job Title:</strong> {title}</p>
      <p><strong>Employer:</strong> {employer}</p>
      <p><strong>Favorite Movies:</strong></p>
      <ol>
        {movieList}
      </ol>
    </div>
  )
}

export default Card