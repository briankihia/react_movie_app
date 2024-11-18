import React from "react";
import { useEffect } from "react";

// 6dd5f483


// we explore the ways in which we can call this api to get all the data about movies

// we create a static variable
// we use the below inside of our component to gather the data
// we want to fecth the data from this api as soon as our component loads thus we use the useEffect hook
const API_URL = 'http://www.omdbapi.com?apikey=6dd5f483'

// we create our app which is our main functional component
const App = () => {

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
            console.log(data.Search);

        }

    // we use useEffect to fetch the data from our above api as soon as the component loads
    useEffect(() => {
    //    now we call searchMovies to see it's content
    searchMovies('Spiderman');

    }, []);

    return (
        <h1>App1</h1>

    );
}

// we have to export every single one of our component
export default App;