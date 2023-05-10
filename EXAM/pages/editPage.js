import { editItem, getById } from '../src/data.js';
import { html } from '../src/lib.js';

export async function editPage(ctx){
    const itemId = ctx.params.id;
    const item = await getById(itemId);

    ctx.render(editTemp(item, onSubmit))


    async function onSubmit(ev){
        ev.preventDefault();

        const form = new FormData(ev.target);
        const name = form.get('name');
        const description = form.get('description');
        const imageUrl = form.get('imageUrl');
        const nutrition = form.get('nutrition');

        if(name == '' || description == '' || imageUrl == '' || nutrition == ''){
            return alert('All firlds are required');
        };

        const data = { name, imageUrl, description, nutrition };
        await editItem(itemId, data);
        ev.target.reset();
        ctx.page.redirect(`/details/${itemId}`);
    }
};

function editTemp(item, onSubmit){
    return html `
     <section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                .value="${item.name}"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                .value="${item.imageUrl}"
                placeholder="Fruit Image URL"
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
                .value="${item.description}"
              ></textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
                .value="${item.nutrition}"
              ></textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>`
}