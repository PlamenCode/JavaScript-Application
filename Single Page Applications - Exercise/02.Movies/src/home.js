import { detailsPage } from "./details.js";
import { showView } from "./utils.js";

const homeSection = document.getElementById('home-page');
const catalog = homeSection.querySelector('#movie .card-deck.d-flex.justify-content-center');
catalog.addEventListener('click', (ev) => {
    ev.preventDefault();
    if(ev.target.tagName == 'BUTTON'){
        const id = ev.target.dataset.id;
        detailsPage(id)
    }

});

export function homePage(){
    showView(homeSection);
    displayMovies();
};

async function displayMovies(){
    let movies = await getMovies();
    catalog.replaceChildren(...movies.map(createMovieCard));
}

function createMovieCard(movie){
    const element = document.createElement('div');
    element.className = 'card mb-4';
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class-"card-title" >${movie.title}</h4>
        </div> 
    <div class="card-footer">
        <a href="/details/${movie._id}">
            <button data-id = '${movie._id}' type-"button" class="bt btn-info">Details</button> 
        </as 
    </div>`;

    return element;
    
}

async function getMovies(){
    const responce = await fetch('http://localhost:3030/data/movies');
    const data = await responce.json();
    
    return data;
}