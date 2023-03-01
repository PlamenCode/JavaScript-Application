window.addEventListener('load',showInfo);
let main = document.getElementById('main');
main.addEventListener('click', onBtnClick)


async function showInfo(){
    let data = await getTitleArticle()
    
    data.forEach(element => getElement(element));
}
    
    function onBtnClick(ev){
        ev.preventDefault();
        let targetBtn = ev.target;
        if(targetBtn.className == 'button'){
            if(targetBtn.textContent == 'More'){
                targetBtn.textContent = 'Less';
                let acordionDiv = targetBtn.parentElement.parentElement;
                
                let hiddenDiv = acordionDiv.querySelector('.extra');
                hiddenDiv.style.display = 'flex';
            } else{
                targetBtn.textContent = 'More';
                let acordionDiv = targetBtn.parentElement.parentElement;

                let hiddenDiv = acordionDiv.querySelector('.extra');
                hiddenDiv.style.display = 'none';
            
            }
        }
    };

    async function getElement(element){

        let id = element._id;
        let title = element.title;
        
        let extra = await getDetails(id);
        
        let div = document.createElement('div');
        div.setAttribute('class', 'accordion');
        div.innerHTML = ` 
        <div class="head">
            <span>${title}</span>
            <button class="button" id="${id}">More</button>
            </div>
            <div class="extra">
            <p>${extra}</p>
            </div>
            `;
            
            main.appendChild(div)
        }



async function getTitleArticle(){
    try{
    let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let responce = await fetch(url);
    let data = await responce.json();
    return data;
    } catch(err){
        return err;
    }
};

async function getDetails(id){
    try{
    let url = `http://localhost:3030/jsonstore/advanced/articles/details`;
    let responce = await fetch(url);
    let data = await responce.json();
    let returnData = Object.entries(data).find(el => el[0] == id)
 
    return returnData[1].content;
    } catch(err){
        return err;
    }
}