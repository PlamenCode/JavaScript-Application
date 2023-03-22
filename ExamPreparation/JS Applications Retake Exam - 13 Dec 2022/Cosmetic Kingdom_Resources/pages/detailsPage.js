import { get } from '../src/api.js';
import { html, nothing } from '../src/lib.js'
import { getUserData } from '../src/utils.js';

export async function detailsPage(ctx){
  const pathname = ctx.pathname;
  const [empty, path, id] = pathname.split('/')
  const user = await getUserData();

  let isOwner = false;
  let isUser = false;
  if(user){
    isUser = true;
  }

  const product = await get(`/data/products/${id}`);

  if(user && user.id == product._ownerId){
    isOwner = true;
  } else{
    isOwner = false;
  }
    ctx.render(detailsTemplate(product, isOwner, isUser))
    ctx.updateNavBar();

};

function detailsTemplate(product, isOwner, isUser) {
    return html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${product.imageUrl}" alt="example1" />
            <p id="details-title">${product.name}</p>
            <p id="details-category">
              Category: ${product.category} <span id="categories"></span>
            </p>
            <p id="details-price">
              Price: ${product.price}<span id="price-number"></span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span>${product.description}
              </div>
            </div>
            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
            ${isOwner ?
                html`
                  <a href="/edit/${product._id}" id="edit-btn">Edit</a>
                  <a href="/delete/${product._id}" id="delete-btn">Delete</a>`
                :
                   nothing
            }
            
            <!-- ${isUser ?
                html `<a href="" id="buy-btn">Buy</a>`
              :
                nothing
            }        -->
            </div>
          </div>
        </section>`;
}
