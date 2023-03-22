import { editItem, getById } from '../src/data.js';
import { html } from '../src/lib.js'


export async function editPage(ctx){
    const id = ctx.params.id;
    const item = await getById(id);

    ctx.render(editTemplate(item, onSubmit));

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

        await editItem(id,data);
        ev.target.reset;
        ctx.page.redirect(`/details/${id}`);
    }
};

function editTemplate(item, onSubmit){
    return html `
     <section id="edit">
          <div class="form">
            <h2>Edit Offer</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
                .value = "${item.title}"
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
                .value = "${item.imageUrl}"
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
                .value = "${item.category}"
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
                .value = "${item.description}"
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
                .value = "${item.requirements}"
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
                .value = "${item.salary}"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`
}