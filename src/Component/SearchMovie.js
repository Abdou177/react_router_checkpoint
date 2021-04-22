import React from 'react'
import Rate from './Rate'
import './Search.css'
const SearchMovie = ({ setSearchByName, SearchByRate, setSearchByRate }) => {
    return (
      <div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Type movie name to search"
            onChange={(e) => setSearchByName(e.target.value)}
          />
          <div className="rating-search">
            <Rate rating={SearchByRate} setSearchByRate={setSearchByRate} />
          </div>
        </div>
      </div>
    );
  };

export default SearchMovie
