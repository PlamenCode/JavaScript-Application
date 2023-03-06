import { html, render } from '../../node_modules/lit-html/lit-html.js';

document.getElementById('searchBtn').addEventListener('click', onClick);
const body  = document.querySelector('tbody');
const match = document.getElementById('searchField');

async function onClick() {
   const info = await getInfo();
   const matchValue = match.value;
   const elements = template(info, matchValue)

   render(elements, body)

   match.value = '';

};

async function getInfo(){
   const url = 'http://localhost:3030/jsonstore/advanced/table';
   const responce = await fetch(url);
   const data = await responce.json();
   return Object.values(data);
};

function template(info, match){
   return html`
   ${info.map(el => elTemplate(el, match))}`
};

function elTemplate(el,match = ''){

   let isSelected = false;
   const matchLower = match.toLowerCase();
   const firstName = el.firstName.toLowerCase();
   const lastName = el.lastName.toLowerCase();
   const email = el.email.toLowerCase();
   const courses = el.course.toLowerCase();
   
   if(firstName.includes(matchLower) || lastName.includes(matchLower) 
   || email.includes(matchLower) || courses.includes(matchLower)){
      isSelected = true;
   }   
   
   return html`
<tr class = ${isSelected ? 'select' : ''}> 
   <td>${el.firstName} ${el.lastName}</td>
   <td>${el.email}</td>
   <td>${el.course}</td>
</tr>`
}