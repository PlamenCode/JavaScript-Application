import { editItem, getById } from '../src/data.js'
import { html } from '../src/lib.js'


export async function editPage(ctx){
    const id = ctx.params.id
    const album  = await getById(id);
    ctx.render(editTemplate(album, onSubmit))

    async function onSubmit(ev){
        ev.preventDefault();

        const form = new FormData(ev.target);
        
        const singer = form.get('singer')
        const album = form.get('album') 
        const imageUrl = form.get('imageUrl') 
        const release = form.get('release')
        const label = form.get('label') 
        const sales = form.get('sales')

        if(singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == ''){
            return alert('All fields are required.');
        } else{
            const data = {singer, album, imageUrl, release, label, sales};
    
            await editItem(id, data);
            ev.target.reset();
            ctx.page.redirect(`/details/${id}`);
        }
    }
};

function editTemplate(album, onSubmit){
    return html`
    <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="singer" id="album-singer" value="${album.singer}" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" value="${album.album}" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" value="${album.imageUrl}" placeholder="Image url" />
            <input type="text" name="release" id="album-release" value="${album.release}" placeholder="Release date" />
            <input type="text" name="label" id="album-label" value="${album.label}" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" value="${album.sales}" placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>`
}