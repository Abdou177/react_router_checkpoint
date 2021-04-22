import React,{useState} from 'react'
import {Data} from './Component/Data'
import SearchMovie from './Component/SearchMovie'
import AddMovie from './Component/AddMovie'
import MovieList from './Component/MovieList'

import './App.css';

function App() {
  const [movieList, setMovieList] = useState(Data);
  const [SearchByName, setSearchByName] = useState('');
  const [SearchByRate, setSearchByRate] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMovieList([...movieList, newMovie]);
  };

  return (
    <div className="App">
      <SearchMovie
        setSearchByName={setSearchByName}
        SearchByRate={SearchByRate}
        setSearchByRate={setSearchByRate}
      />
      <MovieList
        movieList={movieList}
        SearchByName={SearchByName}
        SearchByRate={SearchByRate}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
    </div>
  );
}

export default App;
