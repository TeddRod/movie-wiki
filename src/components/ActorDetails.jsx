import React, {useState, useLayoutEffect} from 'react';
import {actorDetailsFromApi, getOneMovie, getOneTvShow} from '../api/apiHandler';

function ActorDetails({currentActor, setActor, setMovie}) {

        const [actorDetails, setActorDertails] = useState()

        useLayoutEffect(() =>{
                actorDetailsFromApi(currentActor)
                .then((res) =>{
                        // console.log(res);
                        setActorDertails(res)
                })
        },[])

        const closeActorDetails = () => {
                setActor(false)
        }

        const getThatMovie = (clickedMovie) => {
                console.log(clickedMovie);
                getOneMovie(clickedMovie)
                .then((res) => {
                        // console.log(res)
                        setMovie(res)
                })
                setActor(false)
        }
        
        const getThatShow = (clickedMovie) => {
                getOneTvShow(clickedMovie)
                .then((res) => {
                        // console.log(res)
                        setMovie(res)
                })
                setActor(false)
        }
        const closeActor = () => {
                console.log("closing view");
                setActor(false)
        }

        // console.log(actorDetails);

        return (
                <div>
                     {actorDetails && (
                                <div id="actorSection">
                                        <div id="actorDiv" className="white-background shdw">
                                                <section id="actorIdentity">
                                                        <div id="actorPix" className="shdw" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${actorDetails.image})` }}/>
                                                        <div id="actorInfo">
                                                                <span className="fontRegularBold clrGreen">{actorDetails.name}</span>
                                                                <div className="fontBig clrBlue"><span className="fontRegularBold clrBlack">popularity: </span><span>{actorDetails.popularity}</span>  <span className="star">★</span></div>
                                                                <span className="fontMicro clrGrey">{actorDetails.birthday}</span>
                                                        </div>
                                                </section>

                                                {actorDetails.bio && (
                                                        <>
                                                        <span className="clrBlue fontBig">Biography :</span>
                                                        <div id="actorBio" className="clrGrey fontMicro">{actorDetails.bio}</div>
                                                        </>
                                                )}

                                                <span id="filmography" className="fontBig clrBlue">Filmography :</span>
                                                <article id="actorCredits" className="inset-shdw">
                                                        {actorDetails.movie_credits && (
                                                                <section id="actorMovies">
                                                                        <span className="fontRegularBold clrBlue">movies :</span>
                                                                        {actorDetails.movie_credits.map(eachMovie => (
                                                                                <div className="oneActorCast shdw white-background" key={eachMovie.id} onClick={() => getThatMovie(eachMovie.id)}>
                                                                                        <div className="oneMovieCastPix"  style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w185/${eachMovie.poster})`}}/>
                                                                                        <div className="oneActorCredits">
                                                                                                <span className="fontRegular clrGrey">{eachMovie.character}</span>
                                                                                                <span className="fontRegularBold clrGreen">{eachMovie.title}</span>
                                                                                                <span className="fontMicro clrGrey">{eachMovie.release_date}</span>
                                                                                        </div>
                                                                                </div>
                                                                        ))}
                                                                </section>
                                                        )}
                                                        
                                                        {actorDetails.tv_credits && (
                                                                <section id="actorTvShows">
                                                                        <span className="fontRegularBold clrBlue">tv shows :</span>
                                                                        {actorDetails.tv_credits.map(eachShow => (
                                                                                <div className="oneActorCast shdw white-background"  key={eachShow.id} onClick={() => getThatShow(eachShow.id)}>
                                                                                        <div className="oneMovieCastPix"  style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w185/${eachShow.poster})`}}/>
                                                                                        <div className="oneActorCredits">
                                                                                                <span className="fontRegular clrGrey">{eachShow.character}</span>
                                                                                                <span className="fontRegularBold clrGreen">{eachShow.title}</span>
                                                                                                <span className="fontMicro clrGrey">{eachShow.first_air_date}</span>
                                                                                        </div>
                                                                                </div>
                                                                        ))}
                                                                </section>
                                                        )}
                                                </article>
                                                <button className="closeBtn" style={{ display: window.innerWidth < 766 ? "block" : "none" }} onClick={() => closeActor()}>close</button>
                                        </div>

                                        <div id="closeActorDiv" onClick={closeActorDetails}/>
                                </div>
                     )}
                </div>
        )
}

export default ActorDetails
