import React from 'react'
import FaveMovies from './FaveMovies'

const Card = (props) => {
  let { id, name, city, country, title, employer, favoriteMovies } = props.person
  let movieList = favoriteMovies.map((movie, i) => <FaveMovies key={i} movie={movie} />)
  
  return (
    <div className="card">
      <span className="count">{id}/{props.count}</span>
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