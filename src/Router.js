import React, { useState } from 'react'

import {BrowserRouter ,Route, Switch} from 'react-router-dom'
import App from './App'
import { Description } from './Component/Description'
import MovieCard from './Component/MovieCard'
import Home from './Home'
import {Data} from './Component/Data'

const AppRouter=()=>{
    const [movieList, setMovieList] = useState(Data);

    const addNewMovie = (e, newMovie) => {
        e.preventDefault();
        setMovieList([...movieList, newMovie]);
      };
      return(  <>

        <Route path="/description/:id"  render={(props)=><Description {...props} movieList={movieList}  />  } />
        <Route exact path="/"  render={()=><App movieList={movieList} addNewMovie={addNewMovie} />}  />
         </>   
      
        
)}
export default AppRouter