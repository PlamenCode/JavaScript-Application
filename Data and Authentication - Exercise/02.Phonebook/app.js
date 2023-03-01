function attachEvents() {
    
    const loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', get);
    const btnCreate = document.getElementById('btnCreate');
    btnCreate.addEventListener('click', handleCreate);
    
    let phoneBookUrl = `http://localhost:3030/jsonstore/phonebook`;
    let ulPhonebook = document.getElementById('phonebook');

    function handleCreate(){
        let person = document.getElementById('person');
        let phone = document.getElementById('phone');

        post(person.value, phone.value);
        // get();  87/100  with this part 3-rd last test error
        //   87/100 without the same part 1-st test error

        person.value = '';
        phone.value = '';
    }
    
    function load(data){
        ulPhonebook.innerHTML = '';
        
        Object.values(data).forEach(el =>{
            let li = document.createElement('li');
                li.textContent = `${el.person}: ${el.phone}`;
                li.setAttribute('data-id', el._id)

            let btn = document.createElement('button');
                btn.textContent = 'Delete';
                btn.addEventListener('click', handleDel)
                
            li.appendChild(btn);
            ulPhonebook.appendChild(li);
        })
    };

    function handleDel(ev){
        let liEl = ev.target.parentElement;
        let id = liEl.getAttribute('data-id');
        
        del(id);
        liEl.remove();
    }



    async function get(){
        ulPhonebook.innerHTML = '';
        let responce = await fetch(phoneBookUrl);
        let data = await responce.json();

        return load(data)
    };

    async function post(person, phone){
        let body = {
            person: person,
            phone: phone
        }

        let header = getHeader('post', body)
        const responce = await fetch(phoneBookUrl, header);
     
        const data = await responce.json();
        return data;
    };

    async function del(id){
        const url = `http://localhost:3030/jsonstore/phonebook/${id}`;

        let header = getHeader('delete', null);
        const responce = await fetch(url, header);
        const data = await responce.json();
        return data;

    };

    function getHeader(method, body){
        return  {
            method: `${method}`,
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        };
    }

}

attachEvents();