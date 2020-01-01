import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.scss';
import Movies from "./components/movies/Movies";

function App() {

  const [movies, setMovies] = useState([]);

  const POPULAR_Url=`https://api.themoviedb.org/3/movie/popular?api_key=0daa194bfa94462034b1731273a17a8c&language=en-US&page=1`;

  useEffect(() => {
    axios.get(POPULAR_Url)
        .then(res => {
          setMovies(res.data.results)
        })
  },[]);

  return (
    <div className="App">
        <header className="App-header">
            <h3>Levi9 Testwork developed by Taras Sawchuk</h3>
        </header>
        <Movies movies={movies}/>
    </div>
  );
}

export default App;
