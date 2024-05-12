import { makeGetRequest, makePostRequest } from "./httpRequest.js";
import { createTable } from './createTable.js';

let displayLogs = (objArr) => {
	let tableDiv = document.querySelector('.tableCont')
	tableDiv.innerHTML = '';

	let objTemplate = {
		createdAt: 'Logged',
		time: 'Time',
		count: 'Count',
		name: 'Name',
		category: 'Category',
		combatStyle: 'Combat Style'
		//gp: 'Gold Drop Value',

	}

	createTable(objArr, tableDiv, objTemplate)

}


export let updateTable = function() {
	makeGetRequest(`api/combats`).then(res => {
		displayLogs(res)
	})
}


export let configAddLogBtn = function() {

	let submitBtn = document.addLog.submit;

	submitBtn.addEventListener('click', (e) => {
		e.preventDefault();

		let obj = createLogObj(submitBtn.parentElement)

		makePostRequest(obj, "api/combats")
			.then(resp => {
				console.log(resp);
				updateTable();
			})
	})
}



export let createLogObj = function(form) {
	let log = {
		name: `${form.name.value}`,
		count: `${form.count.value}`,
		category: `${form.category.value}`,
		combatStyle: `${form.combatStyle.value}`,
		gp: `${form.gp.value}`,
		time: `${formatTime(form.hour.value)}:${formatTime(form.minute.value)}:${formatTime(form.second.value)}`
	}

	if (log.count < 1) { log.count = 1 }

	return log;

};

let formatTime = function(timeValue) {
	if (timeValue.trim() === "" || timeValue.trim() < 0) { return '00' }
	if (timeValue.trim() < 10 && timeValue.trim().length < 2) {
		return `0${timeValue.trim()}`
	} else { return timeValue.trim() }
}

