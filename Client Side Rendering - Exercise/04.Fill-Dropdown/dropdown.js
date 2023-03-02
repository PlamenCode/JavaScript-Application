import { html, render } from '../../node_modules/lit-html/lit-html.js';
const selector = document.getElementById('menu');
const form = document.querySelector('form');
form.addEventListener('submit', addItem);

onLoad();

async function addItem(ev){
    ev.preventDefault();
    
    const text = form.itemText.value
    if(text == ''){
        return;
    };
    
    postItem(text);   
    form.reset();
};

async function onLoad(){
    const items = await getItems();
    render(template(items), selector)
}

function template(items){
    return html`
    ${items.map(item => itemTemplate(item))}`
};

function itemTemplate(item){
    return html `<option value='${item._id}'>${item.text}</option>`;
}

async function getItems(){
    const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
    const responce = await fetch(url);
    const data = await responce.json();
    return Object.values(data);
};

async function postItem(item){
    const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
    const responce = await fetch(url,{
        method: 'post',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify({text: item})
    });
    onLoad();
}