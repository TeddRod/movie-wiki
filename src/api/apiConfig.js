const axios = require ('axios');

const service = axios.get;
const baseUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.REACT_APP_TMDB_KEY;

export { service, baseUrl, apiKey}