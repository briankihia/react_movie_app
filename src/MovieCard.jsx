// why .jsx, when creating a react component, jsx extention is preferrable
// it adds the react logo on the left side
// that's just it, no other difference.

import React from "react";

// in below component we dont have access to movie1 thus we pass it here usign props
// so we dont have to repeat ourselves ie props. something everytime, what we can do is destructure the props
// we use object destructuring ie. simply put a pair of curly braces and then get something that you pass inside of those props

const MovieCard = ({movie}) => {
    return (
        <div className="movie">
            <div >
                <h1></h1>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>

    )
}

export default MovieCard;