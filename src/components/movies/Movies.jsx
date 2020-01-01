import React from 'react';
import {Link} from "react-router-dom";
import "../movies/Movies.scss";

const Movies = props => (
    <div className="movies-container">
        {props.movies.map( movie => {
                return(
                    <div className="movie" key={movie.id}>
                        <img
                            src={"http://image.tmdb.org/t/p/w154/"+ movie.poster_path}
                            alt={movie.title}/>
                        <p>{movie.title}</p>
                        <Link className="details-link" to={{
                            pathname: `/movie/${movie.id}`,
                            state:{
                                id: movie.id,
                                title: movie.title,
                                popularity: movie.popularity,
                                overview: movie.overview,
                                release_date: movie.release_date,
                                poster: movie.poster_path,
                                vote_average: movie.vote_average
                            }
                        }}>View details</Link>
                    </div>
                )
            })
        }
    </div>
);

export default Movies;