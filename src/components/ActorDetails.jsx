import React, {useState, useLayoutEffect} from 'react';
import {actorDetailsFromApi} from '../api/apiHandler';

function ActorDetails({currentActor}) {

        const [actorDetails, setActorDertails] = useState()

        useLayoutEffect(() =>{
                actorDetailsFromApi(currentActor)
                .then((res) =>{
                        // console.log(res);
                        setActorDertails(res)
                })
        },[])

        console.log(actorDetails);

        return (
                <div>
                     {actorDetails && (
                                <div id="actorSection">
                                        <section id="actorIdentity">
                                                <div id="actorPix" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${actorDetails.image})` }}/>
                                                <div id="actorInfo">
                                                        <span className="fontBigger clrGreen">{actorDetails.name}</span>
                                                        <div className="fontBig clrBlue"><span className="fontRegularBold clrBlack">popularity: </span><span>{actorDetails.popularity}</span>  <span className="star">★</span></div>
                                                        <span>{actorDetails.birthday}</span>
                                                </div>
                                        </section>

                                        {actorDetails.bio && (
                                                <section id="actorBio">
                                                                <div id="bioSection">
                                                                        <span className="clrBlue fontBig">Biography :</span>
                                                                        <span className="clrGrey fontRegular">{actorDetails.bio}</span>
                                                                </div>
                                                </section>
                                        )}

                                        {actorDetails.movie_credits && (
                                                <section id="actorMovies">
                                                        <span>movies :</span>
                                                        {actorDetails.movie_credits.map(eachMovie => (
                                                                <div>
                                                                        <span>{eachMovie.character}</span>
                                                                        <span>{eachMovie.title}</span>
                                                                        <span>{eachMovie.release_date}</span>
                                                                </div>
                                                        ))}
                                                </section>
                                        )}
                                        
                                        {actorDetails.tv_credits && (
                                                <section id="actorTvShows">
                                                        <span>tv shows :</span>
                                                        {actorDetails.tv_credits.map(eachShow => (
                                                                <div>
                                                                        <span>{eachShow.character}</span>
                                                                        <span>{eachShow.title}</span>
                                                                        <span>{eachShow.first_air_date}</span>
                                                                </div>
                                                        ))}
                                                </section>
                                        )}
                                </div>
                     )}
                </div>
        )
}

export default ActorDetails
