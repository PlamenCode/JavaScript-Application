import { createRequest } from '../src/data.js';
import { html } from '../src/lib.js';

export function addfruitPage(ctx){
    ctx.render(addfruitTemp(onSubmit))

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
        await createRequest(data);
        ev.target.reset();
        ctx.page.redirect('/fruits');
    }

};

function addfruitTemp(onSubmit){
    return html `
    <section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form @submit=${onSubmit} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fruit</button>
            </form>
          </div>
        </section>`
}