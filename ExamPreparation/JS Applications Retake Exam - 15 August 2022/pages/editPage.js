import { editItem, getById } from '../src/data.js';
import { html } from '../src/lib.js'


export async function editPage(ctx){
    const id = ctx.params.id; 
    const item = await getById(id);

    ctx.render(editTemplate(item, onSub));

    async function onSub(ev){
        ev.preventDefault();

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
        const responce = await editItem(id, data);
        ev.target.reset();
        ctx.page.redirect(`/details/${id}`);
    }


};

function editTemplate(item, onSub){
    return html`
     <section id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form @submit=${onSub} class="edit-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                .value = ${item.brand}
                placeholder="Brand"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                .value = ${item.model}
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                .value = ${item.imageUrl}
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                .value = ${item.release}
                placeholder="Release date"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                .value = ${item.designer}
                placeholder="Designer"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                .value = ${item.value}
                placeholder="Value"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`
}