import { html, render } from '../../node_modules/lit-html/lit-html.js' 

const loadBtn = document.getElementById('loadBooks');
const addForm = document.getElementById('add-form');
const editForm = document.getElementById('edit-form');
editForm.style.display = 'none';

const body = document.querySelector('tbody');

loadBtn.addEventListener('click', loadBooks);

async function loadBooks(ev){
    ev.preventDefault();
    const books = Object.entries(await getBooks());

    const result = books.map(book => rowTemplate(book))

    render(result, body);

};

function rowTemplate(book){
    return html`
    <tr id = ${book[0]}>
        <td class = 'title'>${book[1].title}</td>
        <td class = 'author'>${book[1].author}</td>
        <td>
            <button @click = ${onEdit}>Edit</button>
            <button @click = ${onDel}>Delete</button>
        </td>
    </tr>`
};

function onEdit(ev){
    ev.preventDefault();
    const row = ev.target.parentElement.parentElement;

    const title = row.querySelector('.title').textContent;
    const author = row.querySelector('.author').textContent;
    
    addForm.style.display = 'none';
    editForm.style.display = 'block';
    
};

function onDel(ev){
    ev.preventDefault();
}


async function getBooks(){
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
}