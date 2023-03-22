import { getUserData } from "../src/utils.js";
import { html, render} from '../src/lib.js'

const header = document.querySelector('header')


export async function updateNavBar(){
    const user = await getUserData();
    render(navBarTemplate(user), header)
};

function navBarTemplate(user){
    return html `
     <!-- Navigation -->
     <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.jpg" alt=""
        /></a>

        <nav>
          <div>
            <a href="/dashboard">Dashboard</a>
          </div>

          ${user 
            ? html `
            <!-- Logged-in users -->
            <div class="user">
                <a href="/create">Create Offer</a>
                <a href="/logout">Logout</a>
            </div>`
            : html `
             <!-- Guest users -->
            <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>`}
        </nav>`
}