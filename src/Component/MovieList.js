import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movieList, SearchByName, SearchByRate }) => {
    return (
        <div
      className="movies-list"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {movieList
        .filter(
          (el) =>
            el.name.toUpperCase().includes(SearchByName.toUpperCase().trim()) &&
            el.rating >= SearchByRate
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
    </div>
    )
}

export default MovieList
