import React from 'react';
import "./SimilarMovies.scss";

const SimilarMovies = props => (
    <div className="similar-movies-container">
        {props.similarMovies.map( movie => {
            return(
                <div className="similar-movie" key={movie.id}>
                    <img
                        src={"http://image.tmdb.org/t/p/w154/"+ movie.poster_path}
                        alt={movie.title}/>
                    <p>{movie.title}</p>
                </div>
            )
        })
        }
    </div>
);

export default SimilarMovies;