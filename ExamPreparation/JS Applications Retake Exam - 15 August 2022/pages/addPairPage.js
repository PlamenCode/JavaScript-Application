import { createShoeRequest } from "../src/data.js";
import { html } from "../src/lib.js"


export function addpairPage(ctx){

    ctx.render(addPairTemplate(onSub))

    async function onSub(ev){
        ev.preventDefault()

        const form = new FormData(ev.target);

        const brand = form.get('brand');
        const model = form.get('model');
        const imageUrl = form.get('imageUrl');
        const release = form.get('release');
        const designer = form.get('designer');
        const value = form.get('value');

        if(brand == '' || model == '' || imageUrl == '' || release == '' || designer == '' || value == ''){
          return alert('All fields are required.');
        }

        const data = {brand, model, imageUrl, release, designer, value } 
        const responce = await createShoeRequest(data);
        ev.target.reset();
        ctx.page.redirect('/dashboard');    
    }

};

function addPairTemplate(onSub){
    return html`
     <section id="create">
          <div class="form">
            <h2>Add item</h2>
            <form @submit=${onSub} class="create-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`
}