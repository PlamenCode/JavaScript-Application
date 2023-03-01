const sections = [...document.querySelectorAll('.view-section')];

function hideAll(){
    sections.forEach(section => 
        section.style.display = 'none');
};


export function showView(section){
    hideAll();
    section.style.display = 'block';
};

export function updateNav(){
    const user = JSON.parse(localStorage.getItem('user'));
    const msgContainer = document.getElementById('welcome-msg');
    if(user){
        document.querySelectorAll('.user').forEach(x => x.style.display = 'inline-block')
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'none')
        msgContainer.textContent = `Wellcome, ${user.email}`;
    } else{
        document.querySelectorAll('.user').forEach(x => x.style.display = 'none')
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'inline-block')
        msgContainer.textContent = '';

    }
}