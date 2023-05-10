import { getById, getDonations, donate, showDonateBtn } from '../src/data.js';
import { html, nothing } from '../src/lib.js';
import { getUserData } from '../src/utils.js';

export async function detailsPage(ctx){
    const id = ctx.params.id;
    const user = await getUserData();
    const element = await getById(id);

    const isCreator = user && user.id == element._ownerId ? true : false;
    const donations = await getDonations(id);

    const dispalyDonateBtn = await showDonateBtn(id, user.id);
    let display = true;
    if(dispalyDonateBtn == 1){
        display = false;
    }
    
    async function donateHandle(){
        const postId = id;
        const data = { postId }
        await donate(data);
    }
    ctx.render(detailsTemplate(element, isCreator, user, donations, donateHandle, display));
};

function detailsTemplate(element, isCreator, user, donations, donateHandle, display){
    return html `
            <section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src="${element.imageUrl}" alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${element.title}</h2>
                        <p class="post-description">Description: ${element.description}</p>
                        <p class="post-address">Address: ${element.address}</p>
                        <p class="post-number">Phone number: ${element.phone}</p>
                        <p class="donate-Item">Donate Materials: ${donations}</p>

                        <div class="btns">
                           ${isCreator
                              ? html`
                                <a href="/edit/${element._id}" class="edit-btn btn">Edit</a>
                                <a href="/delete/${element._id}" class="delete-btn btn">Delete</a>`
                              : nothing
                            }
                            ${user && display
                              ? html`<a href="#" @click='${donateHandle}' class="donate-btn btn">Donate</a>`
                              : nothing
                            }
                      
                        </div>

                    </div>
                </div>
            </div>
        </section>`
};





