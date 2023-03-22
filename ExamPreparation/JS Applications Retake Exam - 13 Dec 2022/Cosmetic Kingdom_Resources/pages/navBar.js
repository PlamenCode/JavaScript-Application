import { html, render } from "../../../../node_modules/lit-html/lit-html.js";
import { getUserData } from '../src/utils.js'

const header = document.getElementById('navBar');

export function updateNavBar(){
    const user = getUserData()
    render(navBarTemp(user), header)
}

function navBarTemp(user){
    return html`
        <!-- Navigation -->
        <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt=""/></a>
        <nav>
          <div>
            <a href="/dashboard">Products</a>
          </div>
          ${user ?
           html`
           <div class="user">
            <a href="/addProduct">Add Product</a>
            <a href="/logout">Logout</a>
          </div>`
          : html `
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}     
          </div>
        </nav>`
}