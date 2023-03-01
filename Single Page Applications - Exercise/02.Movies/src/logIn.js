import { showView, updateNav } from "./utils.js";
import { homePage } from "./home.js"; 

const login = document.getElementById('form-login');
const form = login.querySelector('form');
form.addEventListener('submit', onSubmit)

export function logInPage(){
    showView(login);
};

async function onSubmit(ev){
    ev.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    await logIn(email, password)
    updateNav();
    homePage();
}

async function logIn(email, password){
    try{
        const url = 'http://localhost:3030/users/login';
        const responce = await fetch(url, {
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });
        if(!responce.ok){
            const error = await responce.json();
            throw new Error(error.messege)
        }

        const user = await responce.json();
        localStorage.setItem('user', JSON.stringify(user))

    } catch(err){
        alert(err.messege)
        throw err;
    };
}