import React from 'react'

function MovieDetails({currentMovie}) {
        return (
                <div>
                        {currentMovie && (
                                <>
                                <section>
                                        <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${currentMovie.poster_path})`}}/>
                                        <div>
                                                <div>{currentMovie.vote_average} <span>★</span> <span>{currentMovie.vote_count}</span></div>
                                                <div>
                                                        <span>{currentMovie.title}</span> <span>{currentMovie.original_language}</span>
                                                </div>
                                                <div>{currentMovie.release_date}</div>
                                        </div>
                                </section>

                                <section>
                                        <div>
                                                <span>Overview :</span>
                                                <span>{currentMovie.overview}</span>
                                        </div>
                                </section>
                                </>
                        )}
                </div>
        )
}

export default MovieDetails
