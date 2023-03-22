import { getAll } from '../src/data.js'
import { html, nothing } from '../src/lib.js'


export async function dashboardPage(ctx){

    const items = await getAll();
    ctx.render(dashboardTemplate(items))
};

function dashboardTemplate(items){
    return html`
    <section id="dashboard">
          <h2>Collectibles</h2>
          <ul class="card-wrapper">
           ${items.length > 0
           ? items.map(item => itemTemplate(item))
           : html `<h2>There are no items added yet.</h2>`
           }
          </ul>    
        </section>`
};

function itemTemplate(item){
    return html`
    <li class="card">
              <img src="${item.imageUrl}" alt="travis" />
              <p>
                <strong>Brand: </strong><span class="brand">${item.brand}</span>
              </p>
              <p>
                <strong>Model: </strong
                ><span class="model">${item.model}</span>
              </p>
              <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
              <a class="details-btn" href="/details/${item._id}">Details</a>
            </li>`
};
