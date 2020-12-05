/**
 * 
 *  @file: Search Movie Controller 
 * 
 *  @author Ruchik Gaikwad 
 * 
 */


import service from "../services/movieServices.js";
import movieUtilController from "./movieviewcontroller.js";

const searchButton = document.getElementById("searchMovie"); 





/**
 * 
 * 
 * @function: add the Event handlers for the cilck of the button 
 * 
 * @callback: the callback makes the search api call by passing the search query. 
 * 
 * 
 * 
 */
function initSearch() {
    
    searchButton.addEventListener("click", function(event) {
        const searchQuery =  document.getElementById("searchMovieInput").value; 
        service.searchMovie(searchQuery)
        .then(dataStream => dataStream.json())
        .then(searchResult => {
            console.log(searchQuery);
            console.log(searchResult, "I am the search result !");
            document.getElementById("searchMovieInput").value = ""; 
            searchResult.results.map(e => {
               document.getElementById("searchResults").appendChild((movieUtilController.createCardElement(e)));
            })
        })
    })
}


export default {
    initSearch
}