import {createSelect, createElement, append} from './util.js'
import {updateTable} from './display.js'
import {makeDeleteRequest} from './httpRequest.js';

export let createDetails = function(obj) {
	console.log(obj.time)


	let time = obj.time === null ? ['00', '00', '00'] : obj.time.split(':');



	let element = document.querySelector(".aside");

	let container = createElement('div',{
		id: 'logInfoContainer'
	});

	let form = createElement('form',
		{
			name: 'updateForm'
		});

	let name = createElement('input',
		{
			name: 'name',
			value: obj.name
		});
		
	append(form,name);


	let hour = createElement('input',
		{
			type: 'number',
			name: 'hour',
			value: time[0]
		})
	append(form,hour)

	let minute = createElement('input',
		{
			type: 'number',
			name: 'minute',
			value: time[1]
		})
	append(form,minute)

	let second = createElement('input',
		{
			type: 'number',
			name: 'second',
			value: time[2]
		})
	append(form,second)

	let gp = createElement('input',
		{
			name: 'gp',
			value: obj.gp
		});
	form.appendChild(gp)


	let count = createElement('input',{
		name: 'count',
		value: obj.count
	})
	append(form,count)
	

	let categories = ['Boss', 'Elite Dungeon', 'Reagular', 'Slayer']
	let category = createSelect(categories)
	category.name = 'category';
	category.value = obj.value;
	append(form,category)
	

	let combatStyles = ['Magic', 'Melee', 'Necromancy', 'Range']
	let combatSyle = createSelect(combatStyles)
	combatSyle.name = 'combatStyle';
	combatSyle.value = obj.combatSyle;
	append(form,combatSyle)
	

	let editBtn = createElement('button', {
		textContent: 'Edit'
	})
	

	let deleteBtn = createElement('button',
		{
			textContent: 'Delete'
		})

	deleteBtn.addEventListener('click', (e) => { 
		console.log("delete?")
		makeDeleteRequest(`api/combats/${obj.id}`)
		.then((response)=>{if(response === true){
			updateTable();
			container.remove();
		}});
		
		
	})



	append(container,form);
	append(container,editBtn);
	append(container,deleteBtn);
	append(element,container);
}



