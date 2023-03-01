import { contacts } from './contacts.js';
import { html, render } from '../../node_modules/lit-html/lit-html.js';

let contactEl = document.getElementById('contacts');

const template = (el) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
     <div class="info">
        <h2>Name: ${el.name}</h2>
        <button class="detailsBtn" @click= ${isClicked} >Details</button>
    </div>
    <div class="details" id="${el.id}">
        <p>Phone number: ${el.phoneNumber}</p>
        <p>Email: ${el.email}</p>
    </div>
</div>`;

let isShown  = false;
function isClicked(ev){
   const card = ev.target.parentElement.parentElement;
   const element = card.querySelector('.details');
   if(!isShown){
    element.style.display = 'block';
    isShown = true;
   } else{
    element.style.display = 'none';
    isShown = false;
   }
}

function create(contact){
    return contact.map(el =>template(el));
}

render(create(contacts), contactEl)


