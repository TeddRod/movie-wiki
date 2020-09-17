import React from 'react'

function MovieDetails({currentMovie}) {
        return (
                <div id="detailsSection" className="white-background">
                        {currentMovie && (
                                <>
                                <section id="mainSection">
                                        <div id="detailPoster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${currentMovie.poster_path})`}}/>
                                        <div>
                                                <div className="fontBig clrBlack"><span className="clrBlue">{currentMovie.vote_average}</span> <span className="star">★</span>, votes: <span className="clrBlue">{currentMovie.vote_count}</span></div>
                                                <div id="detailTitle">
                                                        <span className="clrGreen fontBigger">{currentMovie.title}</span> <span className="clrGrey fontMicro"> {currentMovie.original_language}</span>
                                                </div>
                                                <div className="clrGrey fontMicro">{currentMovie.release_date}</div>
                                        </div>
                                </section>

                                <section>
                                        <div id="overviewSection">
                                                <span className="clrBlack fontBig">Overview :</span>
                                                <span className="clrGrey fontRegular">{currentMovie.overview}</span>
                                        </div>
                                </section>
                                </>
                        )}
                </div>
        )
}

export default MovieDetails
