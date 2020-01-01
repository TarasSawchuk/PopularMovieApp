import React, {useState, useEffect} from "react";
import axios from 'axios';
import SimilarMovies from "./similar-movies/SimilarMovies";
import "./MovieDetails.scss";

const MovieDetails = props => {

    const [similarMovies, setSimilarMovies] = useState([]);

    const movieId = props.location.state.id;
    const SIMILAR_url = "https://api.themoviedb.org/3/movie/"+movieId+"/similar?api_key=0daa194bfa94462034b1731273a17a8c&language=en-US&page=1";

    useEffect(() => {
        axios.get(SIMILAR_url)
            .then(res => {
                console.log(res);
                setSimilarMovies(res.data.results);
            })
    },[]);

    console.log(similarMovies);

    return(
            <div className="movie-details">
                <div className="movie-details__content">
                    <img src={"http://image.tmdb.org/t/p/w500/"+ props.location.state.poster} alt=""/>
                    <div className="describe-box">
                        <h1>{props.location.state.title}</h1>
                        <p><span>Description</span>: {props.location.state.overview}</p>
                        <p><span>Release</span>: {props.location.state.release_date}</p>
                        <p><span>Popularity</span>: {props.location.state.popularity}</p>
                        <p><span>Vote Avarage</span>: {props.location.state.vote_average}</p>
                    </div>
                </div>
                <h2>Similar movies</h2>
                <SimilarMovies similarMovies={similarMovies}/>
            </div>
        )
};

export default MovieDetails;
//