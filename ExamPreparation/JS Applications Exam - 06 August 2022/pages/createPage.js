import { createOffer } from '../src/data.js';
import { html } from '../src/lib.js'


export function createPage(ctx){
    ctx.render(createTemplate(onSubmit))


    async function onSubmit(ev){
        ev.preventDefault();

        const form = new FormData(ev.target);

        const title = form.get('title');
        const imageUrl = form.get('imageUrl');
        const category = form.get('category');
        const description = form.get('description');
        const requirements = form.get('requirements');
        const salary = form.get('salary');

        if(title == '' || imageUrl == '' || category == '' || description == '' || requirements == '' || salary == ''){
            return alert('All fields are required.');
        };

        const data = { title, imageUrl,  category,  description,  requirements,  salary };

        await createOffer(data);
        ev.target.reset;
        ctx.page.redirect('/dashboard') 
    }

};

function createTemplate(onSubmit){
    return html`
    <section id="create">
          <div class="form">
            <h2>Create Offer</h2>
            <form @submit=${onSubmit} class="create-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`
}