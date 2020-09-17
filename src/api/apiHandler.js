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
                                .then((response5) => {
                                        // console.log(response3)
                                        response5.data.cast.map(eachActor => {
                                                // console.log(eachMovie.cast)
                                                if (eachActor.profile_path !== null){
                                                eachActor.image = `url(https://image.tmdb.org/t/p/original//w185${eachActor.profile_path}`
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

export { loadingMoviesFromApi }