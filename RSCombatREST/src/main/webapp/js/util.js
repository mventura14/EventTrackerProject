export let createSelect = function(array, prop) {
	let select = document.createElement('select')
	
	for (let i = 0; i < array.length; i++) {
		let option = document.createElement('option');
		option.value = array[i];
		option.textContent = array[i];
		
		console.log(array[i] + " : " + prop)
		console.log(`${option.value.toLowerCase()} : ${prop.toLowerCase()}`)
		
		
		if(option.value.toLowerCase() === prop.toLowerCase()){
			console.log('selected')
			option.selected = true;
			console.log(option.selected)
		}
		
		console.log(select)
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