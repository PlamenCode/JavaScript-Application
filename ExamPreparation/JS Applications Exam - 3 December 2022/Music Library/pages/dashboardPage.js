import { getAll } from "../src/data.js";
import { html, nothing } from '../src/lib.js'


export async function dashboardPage(ctx){
    const albums = await getAll();
    ctx.render(dashboardTemplate(albums));
    ctx.updateNavBar();
};

function dashboardTemplate(albums){
    return html`
    <section id="dashboard">
        <h2>Albums</h2>
        <ul class="card-wrapper">
         
        ${albums.length > 0
            ? albums.map(album => albumTemplate(album))
            : html`<h2>There are no albums added yet.</h2>`
        }
        </ul>
       
      </section>`
}
function albumTemplate(album){
    return html`
     <li class="card">
            <img src="${album.imageUrl}" alt="travis" />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${album.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
            <a class="details-btn" href="/details/${album._id}">Details</a>
          </li>`
}
