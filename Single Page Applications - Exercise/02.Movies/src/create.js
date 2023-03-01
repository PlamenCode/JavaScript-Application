import { homePage } from "./home.js";
import { showView } from "./utils.js";

const createSec = document.getElementById('add-movie');
const form = createSec.querySelector('form');
form.addEventListener('submit', onSubmit);

export function createPage(){
    showView(createSec);
}

async function onSubmit(ev){
    ev.preventDefault();


    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('img');

    await createMovie(title, description, img);
    form.reset();
    homePage();

}

async function createMovie(title, description, img){
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    await fetch('http://localhost:3030/data/movies',{
        method:'post',
        headers:{
            'Content-Type': 'application/json',
            'X-Authorization': user.accessToken
        },
        body: JSON.stringify({title, description, img})
    });

}