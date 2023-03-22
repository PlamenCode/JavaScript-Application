import { get } from '../src/api.js';
import { html, nothing } from '../src/lib.js'


export async function dashboardPage(ctx){
  const url = `/data/products?sortBy=_createdOn%20desc`;
    const products =  await get(url);
    ctx.render(dashboardTemplate(products, onclick))
    ctx.updateNavBar();

    function onclick(ev){
        const productId = ev.target.parentElement.id;
        ctx.page.redirect(`/detailsPage/${productId}`)
    }
};

function dashboardTemplate(products, onclick) {
    return html`
        <h2>Products</h2>
        <section id="dashboard">
       ${products.map(product => productTemplate(product, onclick))}
        </section>
         ${products?
         html`<h2>No products yet.</h2>`
        : nothing}`
};

function productTemplate(product, onclick){
  return html`
  <div id = ${product._id} data-owner= ${product._ownerId} class="product">
    <img src=${product.imageUrl} alt="example1" />
    <p class="title">${product.name}</p>
    <p><strong>Price:</strong><span class="price">${Number(product.price)}</span>$</p>
    <a class="details-btn" href="#" @click = ${onclick}>Details</a>
  </div>`
}
