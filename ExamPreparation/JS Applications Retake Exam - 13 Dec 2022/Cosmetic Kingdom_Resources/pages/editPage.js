import { html } from '../src/lib.js'
import { get, put } from '../src/api.js'

export async function editPage(ctx){
  const id = ctx.params.id;
  const product = await get(`/data/products/${id}`);

    ctx.render(editTemplate(product, submit))
    ctx.updateNavBar();


  async function submit(ev){
    ev.preventDefault();

    const form = new FormData(ev.target);
    console.log(form);

    const name = form.get('name');
    const imageUrl = form.get('imageUrl');
    const category = form.get('category');
    const description = form.get('description');
    const price = Number(form.get('price'));

    if(name == '' || imageUrl == '' || category == '' || description == '' || price == ''){
      throw new Error('Fill all fields.');
    }

    const url = `/data/products/${id}`;
    const data = {
      name,
      imageUrl,
      category,
      description,
      price
    }

    await put(url, data)
    ctx.page.redirect(`/detailsPage/${id}`)

  }

};

function editTemplate(product, submit) {
    return html`
    <section id="edit">
          <div class="form">
            <h2>Edit Product</h2>
            <form @submit = ${submit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                value = ${product.name}
                placeholder="Product Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                value = ${product.imageUrl}
                placeholder="Product Image"
              />
              <input
                type="text"
                name="category"
                id="product-category"
                value = ${product.category}
                placeholder="Category"
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
                .value = ${product.description}
                >
              </textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                value = ${Number(product.price)}
                placeholder="Price"
              />
              <button type="submit">post</button>
            </form>
          </div>
        </section>`;
}