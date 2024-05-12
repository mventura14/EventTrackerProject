import { createSelect, createElement, append } from './util.js'
import { updateTable, createLogObj } from './display.js'
import { makeDeleteRequest, makePutRequest } from './httpRequest.js';

export let createDetails = function(obj) {
	console.log(obj.time)


	let time = obj.time === null ? ['00', '00', '00'] : obj.time.split(':');



	let element = document.querySelector(".aside");

	let container = createElement('div', {
		id: 'logInfoContainer'
	});

	let form = createElement('form',
		{
			name: 'updateForm'
		});

	let name = createElement('input',
		{
			name: 'name',
			value: obj.name,
			disabled: true
		});

	append(form, name);


	let hour = createElement('input',
		{
			type: 'number',
			name: 'hour',
			value: time[0],
			disabled: true
		})
	append(form, hour)

	let minute = createElement('input',
		{
			type: 'number',
			name: 'minute',
			value: time[1],
			disabled: true
		})
	append(form, minute)

	let second = createElement('input',
		{
			type: 'number',
			name: 'second',
			value: time[2],
			disabled: true
		})
	append(form, second)

	let gp = createElement('input',
		{
			name: 'gp',
			value: obj.gp,
			disabled: true
		});
	form.appendChild(gp)


	let count = createElement('input', {
		name: 'count',
		value: obj.count,
		disabled: true
	})
	append(form, count)


	let categories = ['Boss', 'Elite Dungeon', 'Reagular', 'Slayer']
	let category = createSelect(categories)
	category.name = 'category';
	category.value = obj.value;
	category.disabled = true;
	append(form, category)


	let combatStyles = ['Magic', 'Melee', 'Necromancy', 'Range']
	let combatSyle = createSelect(combatStyles)
	combatSyle.name = 'combatStyle';
	combatSyle.value = obj.combatSyle;
	category.disabled = true;
	append(form, combatSyle)


	let editBtn = createElement('button', {
		textContent: 'Edit'
	})




	let deleteBtn = createElement('button',
		{
			textContent: 'Delete'
		})

	editBtn.addEventListener('click', (e) => {
		let element = e.target;
		if (element.textContent === 'Update') {
			console.log('update info')

			let sendObj = createLogObj(form)
			console.log(sendObj)
			makePutRequest(sendObj, `api/combats/${obj.id}`).then((resp) => {
				console.log("gggg" + resp)
				updateTable();
			})
			element.textContent = "Edit"
		} else {
			element.textContent = "Update";
			formFillable(form)
		}

	})

	deleteBtn.addEventListener('click', (e) => {
		console.log("delete?")
		makeDeleteRequest(`api/combats/${obj.id}`)
			.then((response) => {
				if (response === true) {
					updateTable();
					container.remove();
				}
			});


	})



	append(container, form);
	append(container, editBtn);
	append(container, deleteBtn);
	append(element, container);

	let formFillable = function(form) {

		for (let i = 0; i < form.elements.length; i++) {
			let element = form.elements[i];
			element.disabled = !element.disabled
		}
	}
}



