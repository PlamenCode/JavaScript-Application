import { html, render } from '../../../../node_modules/lit-html/lit-html.js'
import { getUserData } from '../src/utils.js'

const header = document.getElementById('navigatinBar');

export function updateNavBar(){
    const user = getUserData();
    const result = navBarTemp(user)
    render(result, header)
    
}

function navBarTemp(user){
    return html`
         <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
          <nav>
            <div>
              <a href="/dashboard">Dashboard</a>
            </div>
            ${user 
            ? html `<div class="user">
              <a href="/addAlbum">Add Album</a>
              <a href="/logout">Logout</a>
            </div>`
            : html `
            <div class="guest">
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>`}                      
          </nav>`
}