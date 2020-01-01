import React from "react";
import "./MovieDetails.scss";

const MovieDetails = props => {
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
            </div>
        )
};

export default MovieDetails;