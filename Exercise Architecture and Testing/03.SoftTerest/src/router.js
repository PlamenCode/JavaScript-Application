
export function initialize(links){

    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    nav.addEventListener('click', onNavigate);


    const context = {
        showSection,
        goTo,
        updateNav
    };

    return context;

    function onNavigate(ev){
        let target = ev.target;
        if(target.tagName == 'IMG'){
            target = target.parentElement;
        }
        if(target.tagName == 'A'){
            ev.preventDefault();
            const url = new URL(target.href);
            const path = url.pathname;
            goTo(path);
        }
    };
    
    function goTo(path, ...param){
        const handler = links[path];
        if(typeof handler == 'function'){
            handler(context, ...param);
        }    
    };
    
    function showSection(section) {
        main.replaceChildren(section);
    };

    function updateNav(){
        const user = localStorage.getItem('user');
        if(user){
            nav.querySelectorAll('.user').forEach(e => e.style.display = 'block');
            nav.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
        } else {
            nav.querySelectorAll('.user').forEach(e => e.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(e => e.style.display = 'block');
        }
    }
};



