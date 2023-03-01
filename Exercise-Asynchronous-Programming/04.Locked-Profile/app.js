function lockedProfile() {
    getInfo();
    
    async function getInfo(){
        try{
            let url = `http://localhost:3030/jsonstore/advanced/profiles`;
            let responce = await fetch(url);
            let data = await responce.json();
            createCard(data)
        } catch{
            console.log('error');
        }
    };

    function createCard(data){
        let templateDiv = document.querySelector('.profile');
        let mainDiv = document.getElementById('main');
        console.log(data);
       for (const key in data) {
            const element = data[key];
            const username = element.username;
            const email = element.email;
            const age = element.age;
            
            let template = templateDiv.cloneNode(true);
            
            mainDiv.appendChild(template);
       }
    }
}