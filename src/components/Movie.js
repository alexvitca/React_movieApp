import React from "react";

const IMG_APi = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote_average) => {
    if (vote_average >= 8) {
        return 'green';
    } else if (vote_average >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
}

const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
        <div className="movie-headers">
            <img src={poster_path ? (IMG_APi + poster_path) : "https://i.pinimg.com/originals/f5/79/d5/f579d531390fa2989754a1094071dbc3.jpg"} alt={title}></img>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={'tag ${setVoteClass(vote_average)}'}>
                    {vote_average}
                </span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    </div>
)

export default Movie;