import React, {useState, useLayoutEffect} from 'react';
import {actorDetailsFromApi} from '../api/apiHandler';

function ActorDetails({currentActor, setActor}) {

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

        // console.log(actorDetails);

        return (
                <div>
                     {actorDetails && (
                                <div id="actorSection">
                                        <div id="actorDiv" className="white-background shdw">
                                                <section id="actorIdentity">
                                                        <div id="actorPix" className="shdw" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${actorDetails.image})` }}/>
                                                        <div id="actorInfo">
                                                                <span className="fontBigger clrGreen">{actorDetails.name}</span>
                                                                <div className="fontBig clrBlue"><span className="fontRegularBold clrBlack">popularity: </span><span>{actorDetails.popularity}</span>  <span className="star">★</span></div>
                                                                <span className="fontMicro clrGrey">{actorDetails.birthday}</span>
                                                        </div>
                                                </section>

                                                {actorDetails.bio && (
                                                        <section id="actorBio">
                                                                       
                                                                                <span className="clrBlue fontBig">Biography :</span>
                                                                                <div id="biography" className="clrGrey fontMicro">{actorDetails.bio}</div>
                                                                        
                                                        </section>
                                                )}

                                                <span id="filmography" className="fontBig clrBlue">Filmography :</span>
                                                <article id="actorCredits">
                                                        {actorDetails.movie_credits && (
                                                                <section id="actorMovies">
                                                                        <span className="fontRegularBold clrBlue">movies :</span>
                                                                        {actorDetails.movie_credits.map(eachMovie => (
                                                                                <div id="oneActorMovieCredits">
                                                                                        <span className="fontRegular clrGrey">{eachMovie.character}</span>
                                                                                        <span className="fontRegularBold clrGreen">{eachMovie.title}</span>
                                                                                        <span className="fontMicro clrGrey">{eachMovie.release_date}</span>
                                                                                </div>
                                                                        ))}
                                                                </section>
                                                        )}
                                                        
                                                        {actorDetails.tv_credits && (
                                                                <section id="actorTvShows">
                                                                        <span className="fontRegularBold clrBlue">tv shows :</span>
                                                                        {actorDetails.tv_credits.map(eachShow => (
                                                                                <div id="oneActorTvCredits">
                                                                                        <span className="fontRegular clrGrey">{eachShow.character}</span>
                                                                                        <span className="fontRegularBold clrGreen">{eachShow.title}</span>
                                                                                        <span className="fontMicro clrGrey">{eachShow.first_air_date}</span>
                                                                                </div>
                                                                        ))}
                                                                </section>
                                                        )}
                                                </article>
                                        </div>

                                        <div id="closeActorDiv" onClick={closeActorDetails}/>
                                </div>
                     )}
                </div>
        )
}

export default ActorDetails
