import React from 'react'

function MovieDetails({currentMovie}) {
        return (
                <div id="detailsSection">
                        {currentMovie && (
                                <div id="detailsDiv" className="white-background">
                                        <section id="mainSection">
                                                <div id="detailPoster" className="shdw" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${currentMovie.poster_path})`}}/>
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
                                                        <span id="overview" className="clrBlack fontBig">Overview :</span>
                                                        <span className="clrGrey fontRegular">{currentMovie.overview}</span>
                                                </div>
                                        </section>

                                        <section id="cast">
                                                {currentMovie.cast && currentMovie.cast.map(oneActor => (
                                                        <div id="oneActor" className="white-background shdw" key={oneActor.id}>
                                                                <div id="oneActorPix" style={{ backgroundImage: `url(${oneActor.image})`}}/>
                                                                <div id="oneActorInfo">
                                                                        <span className="fontRegularBold clrBlue">{oneActor.name}</span>
                                                                        <span className="fontRegular clrGrey">{oneActor.character}</span>
                                                                </div>
                                                        </div>
                                                ))}
                                        </section>
                                </div>
                        )}
                </div>
        )
}

export default MovieDetails
