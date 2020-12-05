/**
 * @File: Controller function to create and render the top movies view for the user. 
 * 
 * @author Ruchik Gaikwad.
 * 
 */

import movieService from "../services/movieServices.js"


const imgsrcUrl = "https://image.tmdb.org/t/p/w500"




/**
 * 
 * @function: responsible for rendering the Top Rated Movies. 
 * 
 * This is the view Orchestrator Method To render the entire view. at once.
 * 
 * 
 */
function createTopMoviesView() {
    movieService.getTopMovies()
    .then(responseStream => responseStream.json())  // Response Obj from the server comes in the Readable stream. Can be a breaking change if the api changes. 
    .then(movies => {
        if(movies.results) {
            movies.results.map(e => {
                const movieCard = createCardElement(e);
                document.getElementById("app").appendChild(movieCard);
            })
        } else {
            throw new Error("Opps! No Movies Found. ");
        }
    })
    .catch(err => {
        const errEl =  createErrorElement(err);
        document.getElementById("app").appendChild(errEl)
    })
}





/**
 * @function Utility function to create the element.
 * 
 * @param {*} movieObj , takes a movie object, creates a card element and renders the content inside it. 
 */
function createCardElement(movieObj) {
    const card = createMyCustomEl("div", "card", "");
    const img = createMyCustomEl("img", "card-img-top", "");
    const cardBody = createMyCustomEl("div", "card-body", "");
    const heading = createMyCustomEl("h5", "card-title", "");
    const details = createMyCustomEl("p", "card-text", "");
    const button = createMyCustomEl("a", "btn btn-primary", movieObj.id);
    img.src = `${imgsrcUrl}${movieObj.backdrop_path}`;

    heading.innerHTML = movieObj.title;
    details.innerHTML = movieObj.overview;
    button.innerHTML = "Details"

    cardBody.appendChild(heading);
    cardBody.appendChild(details);
    cardBody.appendChild(button);
    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
}


/**
 * 
 * @function Utility function to create the element.
 * 
 * @param {*} err: Error. 
 * 
 *  
 */
function createErrorElement(err) {
    const el = createMyCustomEl("span", "container alert alert-danger", "err")
    el.innerHTML = err.message;
    console.log(el)
    return el;
}



/**
 * @function Utility function to create the element.
 * 
 * @param {*} tag 
 * @param {*} cssClass 
 * @param {*} id 
 * 
 * 
 */
function createMyCustomEl(tag, cssClass, id) {
    const element = document.createElement(tag);
    element.className = cssClass;
    element.id = id
    return element;
}

export default {
    createMyCustomEl, 
    createTopMoviesView
}