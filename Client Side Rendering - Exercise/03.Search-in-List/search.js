import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const body = document.body;

function townsTemplate(towns, match){
   return html`
   <article>
        <div id="towns">
            <ul>
                ${towns.map(town => townTamplate(town, match))}
            </ul>
        </div>
        <input type="text" id="searchText" />
        <button @click="${search}">Search</button>
        <div id="result">${countMatches(towns, match)}</div>
    </article>
   `
};
function townTamplate(town, match){
    return html`<li class = ${( match && town.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${town}</li>`
};

update()
function update(match = ''){
   const townsEl = townsTemplate(towns, match)
   render(townsEl, body)
}

function search() {
   const match = document.getElementById('searchText').value;
   update(match);
};

function countMatches(towns, match){
   const matches = towns.filter(town => match && town.toLowerCase().includes(match.toLowerCase()));
   console.log(matches);
   return matches ? `${matches.length} matches found` : '';
}


