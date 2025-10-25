/*

Use state to manage:
○ selectedGenre (string): Tracks the currently selected genre.
○ isLoading (boolean): Indicates if the app is "loading" movie data.
○ error (string): Stores error messages, if any.
○ movies (array): Holds the list of movies for the selected genre.

*/

import React, { useState } from 'react';

const MovieSelector = ({ selectedGenre, setSelectedGenre }) => {

    return (
        <div>
            <select
                id = "movie-selector"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
            >
                <option value="">Choose a genre...</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
            </select>
        </div>
    );
};

export default MovieSelector;