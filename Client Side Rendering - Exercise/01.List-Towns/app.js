import { html, render } from '../../node_modules/lit-html/lit-html.js';

const townsInput = document.getElementById('towns');
const root = document.getElementById('root');
const btn = document.getElementById('btnLoadTowns');
btn.addEventListener('click', loadTowns)



function loadTowns(ev){
    ev.preventDefault();
    const towns = townsInput.value;

    let citiesArr = towns.split(', ');  
    render(template(citiesArr), root);
    townsInput.value = '';
};

function template(citiesArr){
    return html`
    <ul>
        ${cityTemplate(citiesArr)}
    </ul>`
};

function cityTemplate(cities){
   return cities.map(city => html`<li>${city}</li>`);
};


