import { getAllUserPosts } from '../src/data.js';
import { html, nothing } from '../src/lib.js'
import { getUserData } from '../src/utils.js'

export async function myPostsPage(ctx){
    const user = await getUserData();
    const userId = user.id;
    const items = await getAllUserPosts(userId);
    
    ctx.render(mypostsTemplate(items))
} 


function mypostsTemplate(items){
    return html`
    <section id="my-posts-page">
            <h1 class="title">My Posts</h1>

            <!-- Display a div with information about every post (if any)-->
            <div class="my-posts">
               ${items.length > 0
                  ? items.map(item => itemTemplate(item))
                  : nothing
                }
            </div>
            ${items.length < 1
              ? html `<h1 class="title no-posts-title">You have no posts yet!</h1>`
              : nothing
            }
        </section>`
};

function itemTemplate(item){
    return html`
    <div class="post">
                    <h2 class="post-title">${item.title}</h2>
                    <img class="post-image" src="${item.imageUrl}" alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/details/${item._id}" class="details-btn btn">Details</a>
                    </div>
                </div>`
}