import { createPostRequest } from '../src/data.js';
import { html } from '../src/lib.js';

export function createPage(ctx){
    ctx.render(createTemplate(onSubmit))

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
        await createPostRequest(data);
        ev.target.reset();
        ctx.page.redirect('/dashboard');
    }
};

function createTemplate(onSubmit){
    return html `
     <section id="create-page" class="auth">
            <form @submit=${onSubmit} id="create">
                <h1 class="title">Create Post</h1>

                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" id="title">
                </article>

                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" id="description">
                </article>

                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl">
                </article>

                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address">
                </article>

                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone">
                </article>

                <input type="submit" class="btn submit" value="Create Post">
            </form>
        </section>`
}