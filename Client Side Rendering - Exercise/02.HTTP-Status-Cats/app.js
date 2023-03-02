import { html, render} from '../../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js'
const section = document.getElementById('allCats');

displayCats(cats);

function template(cats){
    return html`
        <ul>
            ${cats.map(cat => catTemplate(cat))}
        </ul>`
};

function catTemplate(cat){
    return html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click="${showInfo}">Show status code</button>
            <div class="status" style="display: none" id="100">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`
};

function showInfo(ev){
    ev.preventDefault();
    const catCard = ev.target.parentElement.parentElement;
    const div = catCard.querySelector('.status');
    if(div.style.display == 'none'){
        div.style.display = 'block';
        ev.target.textContent = 'Hide status code';
    } else {
        div.style.display = 'none' ;
        ev.target.textContent = 'Show status code';

    }
}

function displayCats(cats){
    const catsEl = template(cats);
    render(catsEl, section)
};



