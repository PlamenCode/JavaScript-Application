import { homePage } from "./home.js";
import { logInPage } from "./logIn.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";
import { updateNav } from "./utils.js";


const routes = {
    '/': homePage,
    '/logIn': logInPage,
    '/Register': registerPage,
    '/create': createPage,
    '/logOut': logOut
}

document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(ev){
    if(ev.target.tagName == 'A' && ev.target.href){
        ev.preventDefault();

        const path = new URL(ev.target.href).pathname;
        const view = routes[path];

        if(typeof view == 'function'){
            view();
        }
    }
}


function logOut(){
    localStorage.removeItem('user');
    updateNav();
}

updateNav();
homePage();
