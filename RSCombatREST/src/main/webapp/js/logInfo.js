import { createSelect, createElement, append } from './util.js'
import { displayAllLogs, createLogObj } from './display.js'
import { makeDeleteRequest, makePutRequest } from './httpRequest.js';

export let createDetails = function(obj) {
	let time = obj.time === null ? ['00', '00', '00'] : obj.time.split(':');

	let element = document.getElementById('entryDetails');

	let container = createElement('div', {
		id: 'logInfoContainer'



	});

	let form = createElement('form',
		{
			name: 'updateForm'
		});




	let timeContainer = createElement('div',
		{
			class: 'time'
		})
	append(form, timeContainer)



	let hour = createElement('input',
		{
			type: 'number',
			name: 'hour',
			value: time[0],
			disabled: true
		})
	append(timeContainer, hour)

	append(timeContainer, createElement('p', { textContent: ':' }))

	let minute = createElement('input',
		{
			type: 'number',
			name: 'minute',
			value: time[1],
			disabled: true
		})
	append(timeContainer, minute)

	append(timeContainer, createElement('p', { textContent: ':' }))

	let second = createElement('input',
		{
			type: 'number',
			name: 'second',
			value: time[2],
			disabled: true
		})
	append(timeContainer, second)


	let name = createFloatLabelInput('input', 'Name/Activity', {
		id: 'detailName',
		name: 'name',
		value: obj.name,
		disabled: true
	})
	append(form, name);


	let gp = createFloatLabelInput('input', 'GP Value', {
		id: 'detailGP',
		name: 'gp',
		type: 'number',
		value: obj.gp,
		disabled: true

	});

	form.appendChild(gp)


	let count = createFloatLabelInput('input', 'Kill Count', {
		id: 'detailKc',
		name: 'count',
		type: 'number',
		value: obj.count,
		disabled: true

	});
	append(form, count)


	let category = createFloatLabelInput('select', 'Category', {
		id: 'category',
		option: ['Boss', 'Elite Dungeon', 'Regular', 'Slayer'],
		name: 'category',
		disabled: true,
		value: obj.category,

	});
	append(form, category)


	let combatSyle = createFloatLabelInput('select', 'Category', {
		id: 'combatStyle',
		option: ['Magic', 'Melee', 'Necromancy', 'Range'],
		name: 'combatStyle',
		disabled: true,
		value: obj.combatStyle,

	});
	append(form, combatSyle)



	let editBtn = createElement('button', {
		type: 'submit',
		textContent: 'Edit',
		class: 'btn btn-primary'
	})


	let deleteBtn = createElement('button',
		{
			textContent: 'Delete',
			class: 'btn btn-danger'
		})

	editBtn.addEventListener('click', (e) => {
		e.preventDefault();
		let element = e.target;
		if (element.textContent === 'Update') {

			let sendObj = createLogObj(form)
			makePutRequest(sendObj, `api/combats/${obj.id}`).then((resp) => {
				displayAllLogs();
				formFillable(form);

			})
			element.textContent = "Edit";
			count++;

		} else {
		
			element.textContent = "Update";
			formFillable(form);
		}

	})

	deleteBtn.addEventListener('click', (e) => {
		makeDeleteRequest(`api/combats/${obj.id}`)
			.then((response) => {
				if (response === true) {
					displayAllLogs();
					container.remove();
				}
			});
	})



	append(container, form);
	append(form, editBtn);
	append(container, deleteBtn);
	append(element, container);


}

let formFillable = function(form) {

	for (let i = 0; i < form.elements.length; i++) {
		let element = form.elements[i]
		if (element.name && element.type !== 'button' && element.type !== 'submit') {
			element.disabled = !element.disabled
		}

	}
}

let createFloatLabelInput = function(elementType, labelStr, propObj) {


	let div = createElement("div", {
		class: 'form-floating'
	})

	if (elementType === 'select') {
		let select = createElement(elementType, propObj);
		select.placeholder = '';
		select.classList.add('form-select')
		append(div, select)
	}
	else {
		let input = createElement(elementType, propObj);
		input.placeholder = '';
		input.classList.add('form-control')
		append(div, input)
	}

	let label = createElement('label', {
		for: propObj.id,
		textContent: labelStr
	})
	append(div, label)

	return div;
}

