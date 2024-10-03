import React from 'react';

const MoviePoster = ({ image, title }) => (
    <div className="moviePoster">
        <img src={image} alt={`Poster of ${title}`} />
    </div>
);

export default MoviePoster;
