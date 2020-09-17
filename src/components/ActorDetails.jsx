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
                                
                </div>
        )
}

export default ActorDetails
