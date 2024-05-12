import { createStopwatch } from './stopwatch.js';
import { displayAllLogs, configAddLogBtn,configSearch } from './display.js'
import { makeGetRequest, makePostRequest } from "./httpRequest.js";
import { createTable } from './createTable.js';

(() => {
	window.addEventListener('load', function() {


		displayAllLogs();
		configAddLogBtn();
		configSearch();
		let stopwatch = createStopwatch(
			{	
				toggle: document.querySelector("#startStopBtn"),
				toggleBtn: document.querySelector("#startStopBtn"),
				resetBtn: document.querySelector("#resetBtn"),
				hour: document.addLog.hour,
				minute: document.addLog.minute,
				second: document.addLog.second,

			});
		
		stopwatch.activate();
	})

	

	




})()
