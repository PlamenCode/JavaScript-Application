function solve() {
    
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let infoBox = document.getElementById('info')

    let currentStopId = 'depot';
    let nextStopId = '';
    
    async function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${currentStopId}`;
        let responce = await fetch(url);
        let data = await responce.json();
        nextStopId = data.next;

        departBtn.setAttribute('disabled', 'disabled')
        departBtn.disabled = true;
        arriveBtn.removeAttribute('disabled')
        arriveBtn.disabled = false;

        infoBox.textContent = `Next stop ${data.name}`
    }

    async function arrive() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${currentStopId}`;
        currentStopId = nextStopId
        
        let responce = await fetch(url);
        let data = await responce.json();
        nextStopId = data.next;

        departBtn.removeAttribute('disabled')
        departBtn.disabled = false; 
        arriveBtn.setAttribute('disabled', 'disabled')
        arriveBtn.disabled = true;

        infoBox.textContent = `Arriving at ${data.name}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();