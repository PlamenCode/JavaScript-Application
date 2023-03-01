function attachEvents() {
    let textArea = document.getElementById('messages');

    const refreshBtn = document.getElementById('refresh');
          refreshBtn.addEventListener('click', refreshMsg);

    const sendBtn = document.getElementById('submit');
          sendBtn.addEventListener('click', sendMsg);


    async function refreshMsg(){
        const responce = await fetch('http://localhost:3030/jsonstore/messenger');
        const data = await responce.json();
        let messegeBox = '';

        Object.values(data).forEach(messege => {
            messegeBox += `${messege.author}: ${messege.content}\n`;
        });
        messegeBox.trim();
        textArea.textContent = messegeBox;
    };

    async function sendMsg(){
        let name = document.querySelector('input[name="author"]').value;
        let content = document.querySelector('input[name="content"]').value;

        await fetch('http://localhost:3030/jsonstore/messenger',{
            method: 'post',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                author: name,
                content: content
            })
        })
    };
}

attachEvents();