import { service, baseUrl, apiKey} from './apiConfig';

const loadingMoviesFromApi = () => {
        //returns an array of movies from the API database...
        let moviesDB = []

      return  service(`${baseUrl}/movie/upcoming${apiKey}`)
                .then((response1) => {  
                        //feeding the MoviesDB array with the most popular movies from the API
                        moviesDB = response1.data.results
                        return moviesDB
                })

                .catch((err) => {
                        console.log(err)
                })

                .then(() => {
                        //adding every actor from the cast of each movie (only if each actor has his picture in the API)
                        moviesDB.map(eachMovie => {
                                eachMovie.cast = []
                                // console.log(eachMovie)
                                return service(`${baseUrl}/movie/${eachMovie.id}/credits${apiKey}`)
                                .then((response2) => {
                                        // console.log(response3)
                                        response2.data.cast.map(eachActor => {
                                                // console.log(eachMovie.cast)
                                                if (eachActor.profile_path !== null){
                                                eachActor.image = `https://image.tmdb.org/t/p/w185${eachActor.profile_path}`
                                                return eachMovie.cast.push(eachActor) 
                                                }
                                        return eachActor
                                        })
                                        return eachMovie
                                })
                                .catch((err) => {
                                        console.log(err)
                                })
                        })
                        return moviesDB
                })
}

const actorDetailsFromApi = (givenData) => {
        //returns an array of movies from the API database...
        let actorDB = {}

      return  service(`${baseUrl}/person/${givenData}${apiKey}`)
                .then((response1) => {  
                        //feeding the MoviesDB array with the most popular movies from the API
                        actorDB = {
                                id: response1.data.id,
                                name: response1.data.name,
                                birthday: response1.data.birthday,
                                birth_place: response1.data.birthday,
                                popularity: response1.data.popularity,
                                biography: response1.data.biography,
                                image: response1.data.profile_path,
                        }
                        return actorDB
                })

                .catch((err) => {
                        console.log(err)
                })

                .then(() => {
                        return service(`${baseUrl}/person/${givenData}/movie_credits${apiKey}`)
                        .then((response2) => {
                                response2.data.cast.map(eachMovie =>{
                                        let oneMovie = {
                                                title: eachMovie.title,
                                                release_date: eachMovie.release_date,
                                                character: eachMovie.character
                                        }

                                        actorDB.movie_credits.push(oneMovie)
                                        return actorDB
                                })
                                return actorDB
                                
                        })
                        .catch((err) => {
                                console.log(err)
                        })
                
                })
                
                .then(() => {
                        return service(`${baseUrl}/person/${givenData}/tv_credits${apiKey}`)
                        .then((response3) => {
                                response3.data.cast.map(eachShow =>{
                                        let oneTvShow = {
                                                title: eachShow.title,
                                                first_air_date: eachShow.first_air_date,
                                                character: eachShow.character
                                        }

                                        actorDB.tv_credits.push(oneTvShow)
                                        return actorDB
                                })
                                return actorDB
                                
                        })
                        .catch((err) => {
                                console.log(err)
                        })
                
                })
}

export { loadingMoviesFromApi, actorDetailsFromApi }