import { getById, editItem } from '../src/data.js';
import { html } from '../src/lib.js';

export async function editPage(ctx){
    const id = ctx.params.id;
    const item = await getById(id);
    ctx.render(editTemplate(item, onSubmit))

    async function onSubmit(ev){
        ev.preventDefault();

        const form = new FormData(ev.target);
        const title = form.get('title');
        const description = form.get('description');
        const imageUrl = form.get('imageUrl');
        const address = form.get('address');
        const phone = form.get('phone');

        if(title == '' || description == '' || imageUrl == '' || address == '' || phone == ''){
            return alert('All firlds are required');
        };

        const data = { title, description, imageUrl, address, phone };
        await editItem(id, data)
        ev.target.reset();
        ctx.page.redirect(`/details/${id}`);
    }
};

function editTemplate(item, onSubmit){
    return html `
    <section id="edit-page" class="auth">
            <form @submit=${onSubmit} id="edit">
                <h1 class="title">Edit Post</h1>

                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" id="title" .value="${item.title}">
                </article>

                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" id="description" .value="${item.description}">
                </article>

                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl" .value="${item.imageUrl}">
                </article>

                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address" .value="${item.address}">
                </article>

                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone" .value="${item.phone}">
                </article>

                <input type="submit" class="btn submit" value="Edit Post">
            </form>
        </section>`

}