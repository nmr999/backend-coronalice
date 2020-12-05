/**
 * 
 * @file: To contain all the API calls in one place. 
 * 
 * @author Ruchik Gaikwad 
 * 
 */


const apiKey = "46cb0826bc9d924445bc90903e183ebf"
const tmDbDomainV3 = "https://api.themoviedb.org/3"  




function getTopMovies(movieName) {
    return fetch(`${tmDbDomainV3}/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
}


function searchMovie(movieName) {
    return fetch(`${tmDbDomainV3}/search/movie?query=${movieName}&api_key=${apiKey}&page=1`)
}


function getDetails(movieName) {
    return fetch(`${tmDbDomainV3}/movie/${data.target.id}?api_key=${apiKey}&language=en-US`)
}

export default {
    getDetails, 
    searchMovie,
    getTopMovies
}