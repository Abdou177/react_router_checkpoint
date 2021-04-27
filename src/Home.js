// import React,{useState} from 'react'
// import {Data} from './Component/Data'
// import SearchMovie from './Component/SearchMovie'
// import AddMovie from './Component/AddMovie'
// import MovieList from './Component/MovieList'
// import Description from './Component/Description'

// import './App.css';
// import { BrowserRouter as Router ,Route} from 'react-router-dom'

// function Home() {
//   const [movieList, setMovieList] = useState(Data);
//   const [SearchByName, setSearchByName] = useState('');
//   const [SearchByRate, setSearchByRate] = useState(1);

//   const addNewMovie = (e, newMovie) => {
//     e.preventDefault();
//     setMovieList([...movieList, newMovie]);
//   };

//   return (

//     <div className="App">
//       <SearchMovie
//         setSearchByName={setSearchByName}
//         SearchByRate={SearchByRate}
//         setSearchByRate={setSearchByRate}
//       />
//       <MovieList
//         movieList={movieList}
//         SearchByName={SearchByName}
//         SearchByRate={SearchByRate}
//       />
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <AddMovie addNewMovie={addNewMovie} />
//       </div>
//     </div>
//   );
// }

// export default Home;
