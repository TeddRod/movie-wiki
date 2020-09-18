import { service, baseUrl, apiKey} from './apiConfig';

const loadingMoviesFromApi = () => {
        //returns an array of movies from the API database...
        let moviesDB = []

      return  service(`${baseUrl}/movie/popular${apiKey}`)
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
                                birth_place: response1.data.place_of_birth,
                                popularity: response1.data.popularity,
                                bio: response1.data.biography,
                                image: response1.data.profile_path,
                                movie_credits: [],
                                tv_credits: [],
                        }
                        console.log(actorDB);
                        return actorDB
                })

                .catch((err) => {
                        console.log(err)
                })

                .then(() => {
                        return service(`${baseUrl}/person/${givenData}/movie_credits${apiKey}`)
                        .then((response2) => {
                                // console.log(response2.data);
                                response2.data.cast.map(eachMovie =>{
                                        // console.log(eachMovie);
                                        let oneMovie = {
                                                id: eachMovie.id,
                                                title: eachMovie.title,
                                                release_date: eachMovie.release_date,
                                                character: eachMovie.character,
                                                poster: eachMovie.poster_path,
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
                                                id: eachShow.id,
                                                title: eachShow.name,
                                                first_air_date: eachShow.first_air_date,
                                                character: eachShow.character,
                                                poster: eachShow.poster_path,
                                        }

                                        actorDB.tv_credits.push(oneTvShow)
                                        return actorDB
                                })
                                // console.log(actorDB);
                                return actorDB
                        })
                        .catch((err) => {
                                console.log(err)
                        })
                
                })
}

const getOneMovie = (givenData) => {
        let oneMovieDB

        return service(`${baseUrl}/movie/${givenData}${apiKey}`)
        .then((response1) => {
                oneMovieDB = {
                        id: response1.data.id,
                        title: response1.data.title,
                        poster_path: response1.data.poster_path,
                        vote_average: response1.data.vote_average,
                        vote_count: response1.data.vote_count,
                        original_language: response1.data.original_language,
                        release_date: response1.data.release_date,
                        overview: response1.data.overview,
                        popularity: response1.data.popularity,
                        cast:[],
                }
                console.log(oneMovieDB);
                return oneMovieDB
        })
        .catch((err) => {
                console.log(err)
        })

        .then(() => {
                return service(`${baseUrl}/movie/${givenData}/credits${apiKey}`)
                .then((response2) => {
                        response2.data.cast.map(eachActor => {
                                if (eachActor.profile_path !== null){
                                eachActor.image = `https://image.tmdb.org/t/p/w185${eachActor.profile_path}`
                                return oneMovieDB.cast.push(eachActor) 
                                }
                        return oneMovieDB
                        })
                        return oneMovieDB
                })
                .catch((err) => {
                        console.log(err)
                })
        })
}

const getOneTvShow = (givenData) => {
        let oneShowDB

        return service(`${baseUrl}/tv/${givenData}${apiKey}`)
        .then((response1) => {
                oneShowDB = {
                        id: response1.data.id,
                        title: response1.data.name,
                        poster_path: response1.data.poster_path,
                        vote_average: response1.data.vote_average,
                        vote_count: response1.data.vote_count,
                        original_language: response1.data.original_language,
                        release_date: response1.data.first_air_date,
                        popularity: response1.data.popularity,
                        overview: response1.data.overview,
                        cast:[],
                }
                
                return oneShowDB
        })
        .catch((err) => {
                console.log(err)
        })

        .then(() => {
                return service(`${baseUrl}/tv/${givenData}/credits${apiKey}`)
                .then((response2) => {
                        response2.data.cast.map(eachActor => {
                                if (eachActor.profile_path !== null){
                                eachActor.image = `https://image.tmdb.org/t/p/w185${eachActor.profile_path}`
                                return oneShowDB.cast.push(eachActor) 
                                }
                        return oneShowDB
                        })
                        return oneShowDB
                })
                .catch((err) => {
                        console.log(err)
                })
        })
}

export { loadingMoviesFromApi, actorDetailsFromApi, getOneMovie, getOneTvShow }