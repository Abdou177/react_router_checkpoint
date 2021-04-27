import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Description = (props) => {
   const movies=props.movieList.find(el=>el.id==props.match.params.id)
    
    console.log(props.match.params.id)
    console.log(movies)
    return (
        <div className="card_right__button">
            <Link to="/">go home</Link>
        <div className="card" >
        <div className="card_right__review">
            
            
                      <p>{ movies.description}    </p> 
                      <img src={movies.image}/>       
        </div>
        </div>
        </div>
    )
}
export default Description
