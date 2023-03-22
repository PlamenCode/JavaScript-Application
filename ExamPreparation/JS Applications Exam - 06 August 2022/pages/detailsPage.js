import { html, nothing } from "../src/lib.js";
import { getById } from "../src/data.js";
import { getUserData } from "../src/utils.js";


export async function detailsPage(ctx){
    const id = ctx.params.id;
    const item = await getById(id);
    const user = await getUserData();

    let isLoggedIn = false;
    if(user){
        isLoggedIn = true;
    }

    let isOwner = false;
    if(user && item._ownerId == user.id){
        isOwner = true;
    }

    ctx.render(detailsTemplate(item, isOwner, isLoggedIn))
};

function detailsTemplate(item, isOwner, isLoggedIn){
    return html `
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${item.imageUrl}" alt="example1" />
            <p id="details-title">${item.title}</p>
            <p id="details-category">Category: <span id="categories">${item.category}</span></p>
            <p id="details-salary">Salary: <span id="salary-number">${item.salary}</span></p>

            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4><span>${item.description}</span>
              </div>

              <div id="details-requirements">
                <h4>Requirements</h4><span>${item.requirements}</span>
              </div>
            </div>
            <!-- <p>Applications: <strong id="applications"> ${item.applications} </strong></p> -->

            <div id="action-buttons">
                <!--Edit and Delete are only for creator-->
            ${isOwner
              ? html `
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a href="/delete/${item._id}" id="delete-btn">Delete</a>`
              : nothing
            }
              <!--Bonus - Only for logged-in users ( not authors )-->
            ${isLoggedIn && !isOwner
              ? html `<a href="" id="apply-btn">Apply</a>`
              : nothing
            }
        
            </div>
          </div>
        </section>`
}