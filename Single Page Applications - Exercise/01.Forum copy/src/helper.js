export function eFactory (tag, className = '', content = '') {
	const e = document.createElement(tag)
	e.classList.add(className)
	e.innerHTML = content

	return e
}

export const clearFormFields = (form) => [...form.querySelectorAll('input, textarea')]
.forEach(x => x.value = '');


export const isValidData = obj => Object.values(obj).every(x => x !== '')
