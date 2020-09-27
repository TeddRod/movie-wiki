import React from 'react';

function WelcomeCpt({setWelcomeActive}) {

        const closeWelcome = () => {
                if (window.innerWidth < 766) 
                setWelcomeActive(false)
        }

        return (
                <div id="welcomeSection" onClick={() => closeWelcome()}>
                                <span className="fontBigger clrBlack">Movie<span className="clrGreen"> Wiki</span>.</span>
                                <span className="clrGrey fontRegularBold">Welcome to <span className="fontBig clrBlue">Movie Wiki</span>. Browse through all <span className="fontBig clrGreen">TheMovieDB </span>and the the results in the left-hand menu. Search for a particular title of movie, and view the details of the feature film of your choice. Note that additional information is also available for each actor.</span>
                                <span className="fontRegularBold clrBlue">Good Navigation...</span>
                        
                </div>
        )
}

export default WelcomeCpt
