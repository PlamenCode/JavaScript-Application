const loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', loadBooks);

const tableEl = document.querySelector('table');
const tableBody = tableEl.querySelector('tbody');

const form = document.querySelector('form');
form.addEventListener('submit', submitBook);

tableEl.addEventListener('click', onBtnClick);

function onBtnClick(ev){
    const target = ev.target;
    let element = ev.target.parentElement.parentElement
    let id = element.getAttribute('data-id')
    if(target.tagName == 'BUTTON'){

        if(target.textContent == 'Edit'){
            onEdit(element,id);
        }else {
            onDel(id);
        }
    }
}


function onEdit(element, id){
    const formTitle = form.querySelector('h3');
    formTitle.textContent = 'edit Form';
    const tdEl = element.querySelectorAll('td');
    let array = Array.from(tdEl);
    const title = array.shift().textContent;
    const author = array.shift().textContent;

    FormObject.form('name="title"').value = title;

    
    putRequest(id)
}

function putRequest(id){
    
}


function onDel(id){
    delRequest(id);
    loadBooks();
}

async function delRequest(id){
    try{
    let url = `http://localhost:3030/jsonstore/collections/books/${id}`;
    let responce = await fetch(url,{
        method: 'delete'
    });
    if(responce.ok == false){
        throw new Error(responce.messege)
    };
    let data = await responce.json();
    } catch(err){
        alert(err);
    }
}


function submitBook(ev){
    ev.preventDefault();

    const formInfo = new FormData(form);

    const title = formInfo.get('title');
    const author = formInfo.get('author');

    console.log(title, author);
    submitRequest(title, author);
    loadBooks();
    form.reset();
};

async function submitRequest(title, author){
    try{
    const url = 'http://localhost:3030/jsonstore/collections/books';
    const responce = await fetch(url, {
        method: 'post',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'author': author,
            'title': title
        })
    });
    const responceData = await responce.json();
    } catch(err){
        console.log(err);
    }
}


async function loadBooks(){

    let formTitle = form.querySelector('h3');
    formTitle.textContent = 'Form';

    const booksInfo = await getBooks();
    const booksArr = Object.entries(booksInfo);
    tableBody.innerHTML = '';
    
    booksArr.forEach(book => createTable(book));
};

function createTable(book){
    const id = book[0]
  
    const author = book[1].author;
    const title = book[1].title;
    const content = ['button', 'Edit', 'Delete'];

    let row = createHtmlEl('tr');
    row.setAttribute('data-id',id );
    row.appendChild(createHtmlEl('td',title))
    row.appendChild(createHtmlEl('td', author))
    row.appendChild(createHtmlEl('td', content));

    tableBody.appendChild(row);

};

function createHtmlEl(type, content){
    const el = document.createElement(type);
    
    if(Array.isArray(content)){
        const contentType = content.shift();

        content.forEach(contentText => {
            let btn = document.createElement(contentType);
            btn.textContent = contentText;
            
            el.appendChild(btn);
        })
    } else{
        el.textContent = content;
    }
    return el;
}

async function getBooks(){
    let url = 'http://localhost:3030/jsonstore/collections/books';
    let responce = await fetch(url);
    let data = await responce.json();

    return data;
}