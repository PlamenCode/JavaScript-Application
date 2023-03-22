import { html, render } from '../src/lib.js'
import { getUserData } from '../src/utils.js'

const header = document.querySelector('header');


export async function updateNavBar(){
    const user = await getUserData();
    render(navBarTemplate(user), header);
}


function navBarTemplate(user){
    return html `
     <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>
        <nav>
          <div>
            <a href="/dashboard">Dashboard</a>
            <a href="/search">Search</a>
          </div>
        ${user
            ? html`
            <div class="user">
                <a href="/addpair">Add Pair</a>
                <a href="/logout">Logout</a>
            </div>` 
            : html `
            <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>`
        }
        </nav>`
}