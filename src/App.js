import React from "react";
import './App.css'
import SearchIcon from './search.svg'
import Moviecard from './Moviecard';
import { useEffect,useState } from "react";
//2559f953
const API_URL = "http://www.omdbapi.com?apikey=2559f953"
const movie1 = {
    "Title": "Batman: The Animated Series",
    "Year": "1992–1995",
    "imdbID": "tt0103359",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
}
const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    //////////////
    const searchmovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{ searchmovies("batman")
    },[]);
    /////////////
    return (
        <div className="app">
            <h1>Movie Database</h1>
            <div className="search">
                <input type="text" placeholder="Search for movies" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                <img src={SearchIcon} alt="Search" onClick={()=>{searchmovies(search)}} />
              
            </div>
{
    movies.length > 0 ? (
        <div className="movies">
            {movies.map((movie)=>{
                return <Moviecard movie1={movie}/>
            })}
        </div>
    ) : (
        <h2>No movies found</h2>
    )
}
        </div>
    );
};
export default App;