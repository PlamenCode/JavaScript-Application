function loadRepos() {
	let username = document.getElementById('username').value;

	fetch(`https://api.github.com/users/${username}/repos`)
	.then(handleResponce)
	.then(handleData)
	.catch(handleError)
}

function handleResponce(responce){
	if(responce.ok == false){
		throw new Error(`${responce.status} ${responce.statusText}`)
	}
	return responce.json()
}

function handleData(data){
	let list = document.getElementById('repos');

	let items = data.map(el =>{
		let li = document.createElement('li');
		let a = document.createElement('a');
		a.href = el.html_url;
		a.textContent = el.full_name;
		li.appendChild(a);
		return li;
	})
	list.replaceChildren(...items);

}

function handleError(error){
	let list = document.getElementById('repos');
	list.textContent = error.message;
}