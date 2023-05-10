import { getAll } from '../src/data.js';
import { html } from '../src/lib.js';

export async function dashboardPage(ctx){
    const posts = await getAll();

    ctx.render(dashboardTemplate(posts))
};

function dashboardTemplate(posts){
    return html `
    <section id="dashboard-page">
            <h1 class="title">All Posts</h1>

            <!-- Display a div with information about every post (if any)-->
            <div class="all-posts">
                ${posts.length > 0
                  ? posts.map(post => postTemplate(post))
                  : html `<h1 class="title no-posts-title">No posts yet!</h1>`
                }
            </div>
        </section>`
};

function postTemplate(post){
    return html `
     <div class="post">
        <h2 class="post-title">${post.title}</h2>
        <img class="post-image" src="${post.imageUrl}" alt="Material Image">
        <div class="btn-wrapper">
            <a href="/details/${post._id}" class="details-btn btn">Details</a>
        </div>
    </div>`
}

