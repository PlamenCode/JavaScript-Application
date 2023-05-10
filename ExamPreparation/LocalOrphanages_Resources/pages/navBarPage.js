import { html, render } from '../src/lib.js'
import { getUserData } from '../src/utils.js'

const header = document.querySelector('header');

export async function updateNavBar(){
    const user = await getUserData();
    render( navBarTemplate(user), header)   
};

function navBarTemplate(user){
    return html `
     <h1><a href="/dashboard">Orphelp</a></h1>

<nav>
    <a href="/dashboard">Dashboard</a>

    ${user 
      ? html `
        <div id="user">
          <a href="/myposts">My Posts</a>
          <a href="/create">Create Post</a>
          <a href="/logout">Logout</a>
       </div>`
      : html `
        <div id="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`
    }
</nav>`
}