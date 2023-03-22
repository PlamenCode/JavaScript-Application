import { getById } from "../src/data.js";
import { html, nothing } from '../src/lib.js'
import { getUserData } from "../src/utils.js";




export async function detailsPage(ctx){
    const id = ctx.params.id;
    const user = await getUserData();
    const item = await getById(id)

    let isOwner = false;
    if(user.id == item._ownerId){
        isOwner = true;
    }

    ctx.render(detailsTemplate(item, isOwner))
};

function detailsTemplate(item, isOwner){
    return html`
     <section id="details">
          <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
              <img src="${item.imageUrl}" alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>Brand: <span id="details-brand">${item.brand}</span></p>
              <p>
                Model: <span id="details-model">${item.model}</span>
              </p>
              <p>Release date: <span id="details-release">${item.release}</span></p>
              <p>Designer: <span id="details-designer">${item.designer}</span></p>
              <p>Value: <span id="details-value">${item.value}</span></p>
            </div>

            ${isOwner 
            ? html `
            <div id="action-buttons">
              <a href="/edit/${item._id}" id="edit-btn">Edit</a>
              <a href="/delete/${item._id}" id="delete-btn">Delete</a>
            </div>`
            : nothing}  

          </div>
        </section>`
};
