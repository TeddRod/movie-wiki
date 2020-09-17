import React from 'react'

function List({currentList, setMovie}) {

        const selectMovie = (clickedMovie) => {
                setMovie(clickedMovie)
        }

        return (
                <div id="listDiv" className="white-background">
                        {currentList && currentList.map(oneMovie => (
                                <div id="oneMovie" key={oneMovie.id} onClick={() => selectMovie(oneMovie)}>
                                        <div id="pixNtitle">
                                                <div id="moviePix" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w185/${oneMovie.poster_path})`}} />
                                        </div>
                                        <div id="movieInfo">
                                                <span id="movieTitle" className="fontRegular">{oneMovie.title}</span>
                                                <div id="movieRates">
                                                        <span className="fontMicro clrGrey">{oneMovie.vote_average}<span className="star">★</span></span>
                                                        <span className="fontMicro clrGrey">{oneMovie.release_date}</span>
                                                </div>
                                        </div>
                                </div>
                        ))}
                </div>
        )
}

export default List
