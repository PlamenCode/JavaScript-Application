import { post } from '../src/api.js';
import { html} from '../src/lib.js'

export function addProductPage(ctx){
    ctx.render(addProductTemplate(onSubmit))
    ctx.updateNavBar();

    async function onSubmit(ev){
      ev.preventDefault()

      const form = new FormData(ev.target);

      const name = form.get('name');
      const imageUrl = form.get('imageUrl');
      const category = form.get('category');
      const description = form.get('description');
      const price = Number(form.get('price'));

      if(name == '' || imageUrl == '' || category == '' || description == '' || price == ''){
        throw new Error('All fields shoud be filled.')
      }

      const url = '/data/products';
      const data = {
        name,
        imageUrl,
        category,
        description,
        price
      }

       await post(url, data);
      ctx.page.redirect('/dashboard');
    }
};

function addProductTemplate(onSubmit) {
    return html`
      <section id="create">
          <div class="form">
            <h2>Add Product</h2>
            <form @submit = ${onSubmit} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
              />

              <button type="submit">Add</button>
            </form>
          </div>
        </section>`;
}