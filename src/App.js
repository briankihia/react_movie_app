import React from "react";
import { useEffect, useState } from "react";

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

// 6dd5f483


// we explore the ways in which we can call this api to get all the data about movies

// we create a static variable
// we use the below inside of our component to gather the data
// we want to fecth the data from this api as soon as our component loads thus we use the useEffect hook
const API_URL = 'http://www.omdbapi.com?apikey=6dd5f483'

const movie1 = {
    "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
    "Year": "2007",
    "imdbID": "tt1132238",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
}

// we create our app which is our main functional component
const App = () => {

    // here we are going to useState
    // [] that is to set the default value of our movies into an empty array
    const [movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState('');

     // inside here we call a function that is going to fetch our movies
        // we use an async function which means it takes some time to fetch this movies 
        // the async function takes an argument of title
        // after finishing working on seachmovies we need to call it for the data to be seen
        const searchMovies = async (title) => {
            // the below is going to call our api
            // The await keyword pauses the execution of the function until the Promise is resolved or rejected.
            const response = await fetch(`${API_URL}&s=${title}`);

            // once we get the response we have to get the data from it
            const data = await response.json();

            // inside this data object we should have the data about the movies
            // we only need the movies array so we console data.search
            // console.log(data.Search);
            // now rather than console logging data we are going to pass it to setMovies
            // below now enables us to set movie1 to movies  
            setMovies(data.Search);


        }

    // we use useEffect to fetch the data from our above api as soon as the component loads
    useEffect(() => {
    //    now we call searchMovies to see it's content
    searchMovies('Spiderman');

    }, []);
    

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                {/* an input in react needs to have 
                1. placeholder
                2. value
                 */}
                <input
                    placeholder="Search for movies"
                    value= {SearchTerm}
                    // in  above we have a default static value but for us to be able to change we add the below
                    // onchange which accepts a callback function
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* we also add an onclick function to the search icon */}
                <img
                    src= {SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(SearchTerm)}
                />

            </div>

          {
            movies?.length > 0
            ?(
            <div className="container">
                {/* instead of an entire div to hold the movie cards we can simply call the moviecards as self closing component from MovieCard.jsx*/}
                {/* but also we need to pass in a prop called movie1=movie1*/}
                {/* <MovieCard movie1={movies[0]}/> */}
                {/* instead of showing that one static card above, lets display dynamic cards */}
                {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
                {/* <MovieCard movie1={{ Year: "2024", Poster: "some-url", Title: "Some Title", Type: "Movie" }} /> */}

            </div>

            ) : (
                <div className="empty">
                    <h2>No movies found</h2>

                </div>
            )


          }
        </div>

    );
}

// we have to export every single one of our component
export default App;