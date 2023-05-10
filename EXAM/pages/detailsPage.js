import { getById } from '../src/data.js';
import { html, nothing } from '../src/lib.js';
import { getUserData } from '../src/utils.js';

export async function detailsPage(ctx){
    const itemId = ctx.params.id;
    const item = await getById(itemId);
    const user = await getUserData();

    let isCreator = false;
    if(item._ownerId == user.id){
        isCreator = true;
    }
    
    ctx.render(detailsTemp(item, isCreator));
    
};

function detailsTemp(item, isCreator){
    return html `
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${item.imageUrl}" alt="example1" />
            <p id="details-title">${item.name}</p>
            <div id="info-wrapper">
              <div id="details-description"><p>${item.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${item.nutrition}</p>
              </div>
            
            ${isCreator
              ? html `
              <div id="action-buttons">
                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                <a href="/delete/${item._id}" id="delete-btn">Delete</a>
              </div>`
              : nothing
            }
         
            </div>
        </div>
      </section>`
};

description
: 
"A banana is an elongated, edible fruit – botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starchcovered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow upward in clusters near the top of the plant."
imageUrl
: 
"/images/fruit 3.png"
name
: 
"Banana"
nutrition
: 
"One serving, or one medium ripe banana, provides about 110 calories, 0 gram fat, 1 gram protein, 28 grams carbohydrate, 15 grams sugar (naturally occurring), 3 grams fiber, and 450 mg potassium. "
_createdOn
: 
1617194295480
_id
: 
"136777f5-3277-42ad-b874-76d043b069cb"
_ownerId
: 
"847ec027-f659-4086-8032-5173e2f9c93a"