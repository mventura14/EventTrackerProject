export let createSelect = function(array, prop) {
	let select = document.createElement('select')

	for (let i = 0; i < array.length; i++) {
		let option = document.createElement('option');
		option.value = array[i];
		option.textContent = array[i];

		console.log(`${option.value.toLowerCase()} : ${prop.toLowerCase()}`)


		if (option.value.toLowerCase() === prop.toLowerCase()) {
			console.log('selected')
			option.selected = true;
			console.log(option.selected)
		}


		select.appendChild(option);
	}

	return select;
}

export let createElement = function(elementType, attributes) {
	let element = document.createElement(elementType);

	switch (elementType) {
		case 'select':
			for (let prop in attributes) {
				if (prop === 'option') {
					createOption(attributes[prop], attributes.value).forEach((option) => {
						append(element, option)
					})
				} else
					if (prop === 'textContent') {
						element.textContent = attributes[prop];
					} else {
						element.setAttribute(prop, attributes[prop]);
					}
			}

			break;

		default:
			for (let prop in attributes) {
				if (prop === 'textContent') {
					element.textContent = attributes[prop];
				} else {
					element.setAttribute(prop, attributes[prop]);
				}
			}

	}
	return element;
}

export let append = function(parent, child) {
	parent.appendChild(child)
}

let createOption = function(propArr, elementPropVal) {

	let optionArr = [];

	for (let i = 0; i < propArr.length; i++) {
		let option = document.createElement('option');
		option.value = propArr[i];
		option.textContent = propArr[i];



		if (option.value.toLowerCase() === elementPropVal.toLowerCase()) {
			option.selected = true;
		}

		optionArr.push(option);
	}
	
	return optionArr;
}