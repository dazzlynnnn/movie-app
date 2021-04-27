
import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div>
            <h4>{year}</h4>
            <h4>{title}</h4>
            <h4>{summary}</h4>
            <h4>{poster}</h4>
            <h4>{genres[0]}</h4>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;