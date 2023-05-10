import { search } from "../src/data.js";
import { html, nothing } from "../src/lib.js";
import { getUserData } from "../src/utils.js";

export function searchPage(ctx) {
  let hasInput = false;
  ctx.render(searchTemp(hasInput, searchHandle(onSearch)));

  async function onSearch(info) {
    hasInput = true;
    let isResult = false;
    const result = await search(info.search);
    const user = await getUserData();

    if (result.length != 0) {
      isResult = true;
    }

    user ? (result.user = true) : (result.user = false);

    ctx.render(searchTemp(hasInput, searchHandle(onSearch), isResult, result));
  }
};

function searchHandle(callback){
  return function (ev) {
    ev.preventDefault();
    const form = new FormData(ev.target);
    const data = Object.fromEntries([...form]);
    callback(data, ev.target)
}
}

function searchTemp(hasInput, onSubmit, isResult, data) {
  return html` <section id="search">
    <div class="form">
      <h2>Search</h2>
      <form @submit=${onSubmit} class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4>Results:</h4>
    ${hasInput ? resultTemp(isResult, data) : nothing};
  </section>`;
}

function resultTemp(isResult, data) {
  return html` <div class="search-result">
    ${isResult
      ? html`${data.map(el => cardTemp(el, data.user))}`
      : html`<p class="no-result">No result.</p>`}
  </div>`;
}

function cardTemp(item) {
  return html`
  <div class="fruit">
    <img src="${item.imageUrl}" alt="example1" />
    <h3 class="title">${item.name}</h3>
    <p class="description">${item.description}</p>
    <a class="details-btn" href="/details/${item._id}">More Info</a>
  </div>`;
}
