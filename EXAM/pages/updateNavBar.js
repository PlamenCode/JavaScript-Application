import { html, render } from '../src/lib.js';
import { getUserData } from '../src/utils.js'

const header = document.querySelector('header');

export async function updateNavBar(){
    const user = await getUserData();

    render(navBarTemp(user), header)
};

function navBarTemp(user){
    return html `
     <!-- Navigation -->
     <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/fruits">Fruits</a>
            <a href="/search">Search</a>
          </div>

          ${user
            ? html `
              <div class="user">
                <a href="/addfruit">Add Fruit</a>
                <a href="/logout">Logout</a>
              </div>`
            : html `
               <div class="guest">
                 <a href="/login">Login</a>
                  <a href="/register">Register</a>
               </div>`
              }
          </div>
        </nav>`
}