const app = document.getElementById("app");
const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

// API KEY: 46cb0826bc9d924445bc90903e183ebf

const loadCharacters = async () => {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=46cb0826bc9d924445bc90903e183ebf&language=en-US&page=1');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();



fetch("https://api.themoviedb.org/3/movie/popular?api_key=46cb0826bc9d924445bc90903e183ebf&language=en-US&page=1")
    .then(data => {
        console.log(data)
        const moviesPromise = data.json().then(movies => {
            

            movies.results.map(eachMovie => {

                const card = createElement("div", "card");
                const img = createElement("img", "card-img-top");
                const cardBody = createElement("div", "card-body");
                const heading = createElement("h5", "card-title");
                const details = createElement("p", "card-text");
                const button = createElement("a", "btn btn-primary");
                button.addEventListener("click", function(data) {
                    console.log("some one clicked on the details button !!!")
                })

                img.src = `https://image.tmdb.org/t/p/w500/${eachMovie.backdrop_path}`;

                heading.innerHTML = eachMovie.title;
                details.innerHTML = eachMovie.overview;
                button.innerHTML = "Details"

                cardBody.appendChild(heading);
                cardBody.appendChild(details);
                cardBody.appendChild(button);
                card.appendChild(img);
                card.appendChild(cardBody);
                app.appendChild(card);
            })
        });
    })


function createElement(tag, cssCalss) {
    const element = document.createElement(tag);
    element.className = cssCalss;
    return element;
}
