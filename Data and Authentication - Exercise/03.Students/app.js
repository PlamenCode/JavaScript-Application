window.addEventListener('load',onLoad);

const tableHead = document.querySelector(`#results tbody`);
const form = document.getElementById('form');
form.addEventListener('submit', onSubmit);


 async function onLoad(){
    try{
        let url = 'http://localhost:3030/jsonstore/collections/students';
        let responce = await fetch(url);

        if(responce.ok == false){
            let error = await responce.json();
            throw new Error(error.messege);
        };

        let data = await responce.json();
        const students = Object.values(data);

        for (const student of students) {
            tableHead.appendChild(createTable(student))
        }

    } catch(err){
        console.log(err);
    }
};

function onSubmit(ev){
    ev.preventDefault();

    const dataForm = new FormData(ev.target);

    const firstName = dataForm.get('firstName');
    const lastName = dataForm.get('lastName');
    const facultyNum = Number(dataForm.get(`facultyNumber`));
    const grade = Number(dataForm.get('grade'));

    if((typeof firstName !== 'string' || firstName.length == 0) || firstName == '' || (typeof lastName !== "string" || lastName.length == 0) || lastName == "" || facultyNum == '' || grade == '' || Number.isNaN(facultyNum) || Number.isNaN(grade)) {
        return
    };

    request(firstName,lastName,facultyNum,grade);
    form.reset();

};

async function request(firstName, lastName, facultyNumber, grade) {
    
    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'firstName':firstName,
                'lastName':lastName,
                'facultyNumber': facultyNumber,
                'grade':grade
            })
    });

    if(response.ok == false){
        const error = await response.json();
        throw new Error(error.message)
    };

    const dataResponse = await response.json();
    tableHead.appendChild(createTable(dataResponse))

    } catch(err) {
        alert(err.message)
    }
}

function createTable(student){

    const row = createElement('tr');
    row.appendChild(createElement('th', student.firstName));
    row.appendChild(createElement('th', student.lastName));
    row.appendChild(createElement('th', student.facultyNumber));
    row.appendChild(createElement('th', student.grade));

    return row;
    
};

function createElement(type, content){
    let el = document.createElement(type);

    if(content !== '' && content !== undefined){
        el.textContent = content;
    }

    return el;
}