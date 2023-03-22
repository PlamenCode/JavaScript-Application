import { createAlbumRequest } from '../src/data.js';
import { html } from '../src/lib.js'


export function addAlbum(ctx){
    
    ctx.render(addTemplate(onSubmit))
    ctx.updateNavBar();

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
    
            await createAlbumRequest(data);
            ev.target.reset();
            ctx.page.redirect('/dashboard');
        }
    }
};

function addTemplate(onSubmit){
    return html`
    <section id="create">
        <div class="form">
          <h2>Add Album</h2>
          <form @submit=${onSubmit} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>`
}