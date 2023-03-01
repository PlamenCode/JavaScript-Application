async function getInfo() {
  
    const stopId = document.getElementById('stopId');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`;
    const stopNameDiv = document.getElementById('stopName');
    const busList = document.getElementById('buses');

    busList.innerHTML = '';
    stopId.value = '';

    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.name);

        stopNameDiv.textContent = data.name;
        Object.entries(data.buses).forEach(([busId, time]) => {
            let liEl = document.createElement('li');
            liEl.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busList.appendChild(liEl);
        });
    } catch (error){
        stopNameDiv.textContent = `Error`;
    }
}