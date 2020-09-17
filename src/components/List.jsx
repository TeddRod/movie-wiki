import React from 'react'

function List({currentList, setMovie}) {

        const selectMovie = (clickedMovie) => {
                setMovie(clickedMovie)
        }

        return (
                <div id="listDiv">
                        {currentList && currentList.map(oneMovie => (
                                <div key={oneMovie.id} onClick={() => selectMovie(oneMovie)}>
                                        <div>
                                                <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w185/${oneMovie.poster_path})`}} />
                                                <span>{oneMovie.title}</span>
                                        </div>
                                        <div>
                                                <span>{oneMovie.vote_average}</span>
                                                <span>{oneMovie.popularity}</span>
                                                <span>{oneMovie.release_date}</span>
                                        </div>
                                </div>
                        ))}
                </div>
        )
}

export default List
