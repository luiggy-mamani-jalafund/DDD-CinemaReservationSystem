import React from 'react';

const MovieInfo = ({ title, description }) => (
    <div className="movieInfo">
        <h1 className="movieTitle">{title}</h1>
        <p className="movieDescription">{description}</p>
    </div>
);

export default MovieInfo;
