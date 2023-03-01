import { homePage } from "./home.js";
import { showView, updateNav } from "./utils.js";

const singUp = document.getElementById('form-sign-up');
const form = singUp.querySelector('form');
form.addEventListener('submit', getForm)

export function registerPage(){
    showView(singUp);
};

async function getForm(ev){
    ev.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if(email != '' && password != '' && repeatPassword != '' && password == repeatPassword){
        await submitRegistration(email, password, repeatPassword)
        form.reset();
        homePage();
        updateNav();
    } else{
        throw new Error('Passwords dont match, invalidEmail, or empty fields');
    }
};

async function submitRegistration(email, password, repeatPassword){
    let url = 'http://localhost:3030/users';
    try{
        const responce = await fetch(url,{
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password,
                repeatPassword
            })
        });
        if(!responce.ok){
            const error = await responce.json();
            throw new Error(error.messege)
        }
    } catch (err){
        throw err;
    }
};


