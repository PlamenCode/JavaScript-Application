import { getById } from '../src/data.js'
import { html, nothing } from '../src/lib.js'
import { getUserData } from '../src/utils.js';

export async function detailsPage(ctx){
    const id = ctx.params.id
    const album = await getById(id);
    const user = await getUserData();
    let isCreator = false;
    if(album._ownerId == user.id){
        isCreator = true;
    };
    ctx.render(detailsTemplate(album, isCreator))

};

function detailsTemplate(album, isCreator){
    return html`
      <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src="${album.imageUrl}" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">0</span></div>

          <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            ${isCreator 
                ? html`
                    <a href="/edit/${album._id}" id="edit-btn">Edit</a>
                    <a href="/delete/${album._id}" id="delete-btn">Delete</a>`
                : nothing
            }
            <a href="" id="like-btn">Like</a>
          </div>
        </div>
      </section>`

}