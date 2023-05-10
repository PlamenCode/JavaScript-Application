import { getAll } from '../src/data.js';
import { html } from '../src/lib.js';

export async function fruitsPage(ctx){
    const items = await getAll();
    console.log(items);
    ctx.render(fruitsTemp(items));
};

function fruitsTemp(items){
    return html`
     <h2>Fruits</h2>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          ${items.length > 0
            ? items.map(item => itemTemp(item))
            : html `<h2>No fruit info yet.</h2>`
          } 
        </section>
        `
};

function itemTemp(item){
    return html `
    <div class="fruit">
            <img src="${item.imageUrl}" alt="example1" />
            <h3 class="title">${item.name}</h3>
            <p class="description">${item.description}</p>
            <a class="details-btn" href="/details/${item._id}">More Info</a>
          </div>`
}

