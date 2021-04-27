
import React from "react";
import PropTypes from "prop-types";

function Movie({ key, year, title, summary, poster, genres }) {
    return (
        <div>
            <h4>{key}</h4>
            <h4>{year}</h4>
            <h4>{title}</h4>
            <h4>{summary}</h4>
            <h4>{poster}</h4>
            <h4>{genres}</h4>
        </div>
    );
}

Movie.propTypes = {
    key: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;