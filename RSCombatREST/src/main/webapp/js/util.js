export let createSelect = function(array) {

	let select = document.createElement('select')

	for (let i = 0; i < array.length; i++) {
		let option = document.createElement('option');
		option.value = array[i];
		option.textContent = array[i];
		select.appendChild(option);
	}

	return select;
}

export let createElement = function(elementType, attributes) {
	const element = document.createElement(elementType);
	for (let prop in attributes) {
		if (prop === 'textContent') {
			element.textContent = attributes[prop];
		} else {
			element.setAttribute(prop, attributes[prop]);
		}
	}
	return element;
}

export let append = function(parent,child){
	parent.appendChild(child)
}