import { getAll } from '../src/data.js'
import { html } from '../src/lib.js'


export async function dashboardPage(ctx){
    const offers = await getAll();
    ctx.render(dashboardTemplate(offers))
};

function dashboardTemplate(offers){
    return html`
     <section id="dashboard">
          <h2>Job Offers</h2>
          <!-- Display a div with information about every post (if any)-->
        ${offers.length > 0
            ? offers.map(offer => offerTemplate(offer))
            : html `<h2>No offers yet.</h2>`
        }

        </section>`
};

function offerTemplate(offer){
    return html `
    <div class="offer">
            <img src="${offer.imageUrl}" alt="example1" />
            <p><strong>Title: </strong><span class="title">${offer.title}</span></p>
            <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
            <a class="details-btn" href="/details/${offer._id}">Details</a>
          </div>`
}