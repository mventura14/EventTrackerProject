import {createDetails} from './logInfo.js';

export let createTable = function(obj, apendTo, propObj) {
	let table = document.createElement('table');
	table.appendChild(createHead(propObj));
	table.appendChild(createBody(obj, objPropToArr(propObj)));
	apendTo.appendChild(table);
	return table;
};

let objPropToArr = function(obj) {
	let propArr = []

	for (let prop in obj) {
		propArr.push(prop)
	}
	return propArr
}


let createHead = function(obj) {
	let thead = document.createElement('thead')
	thead.appendChild(createHeaderRow(obj))
	return thead;
}

let createHeaderRow = function(obj) {
	let row = document.createElement('tr')
	console.log(obj)
	for (let prop in obj) {
		let th = document.createElement('th');
		th.textContent = obj[prop];
		row.appendChild(th);
	}
	return row
}

let createBody = function(obj, displayArr) {
	let tbody = document.createElement('tbody')

	for (let i = 0; i < obj.length; i++) {

		tbody.appendChild(createBodyRow(obj[i], displayArr))

	}

	return tbody
}

let createBodyRow = function(obj, propArr) {

	let tr = document.createElement('tr')

	tr.addEventListener('click', (e) => {
		
		if(document.getElementById('logInfoContainer')){
			document.getElementById('logInfoContainer').remove();
		}
		createDetails(obj)
		
	})

	for (let i = 0; i < propArr.length; i++) {


		let td = document.createElement('td');

		if (propArr[i] === 'createdAt') {
			td.textContent = formatDateTime(obj[propArr[i]]);
			tr.appendChild(td);
		} else {
			td.textContent = obj[propArr[i]];
			tr.appendChild(td);
		}



	}

	return tr;
}

function formatDateTime(dateTimeString) {
	const date = new Date(dateTimeString);
	const year = date.getFullYear();
	const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
	const day = ('0' + date.getDate()).slice(-2);
	const hours = ('0' + date.getHours()).slice(-2);
	const minutes = ('0' + date.getMinutes()).slice(-2);

	return `${year}/${month}/${day} ${hours}:${minutes}`;
}


let displayLogInfo = function() {
	let side = document.querySelector("aside");
	
}




