import { createStopwatch } from './stopwatch.js';

import { updateTable, configAddLogBtn } from './display.js'
import { makeGetRequest, makePostRequest } from "./httpRequest.js";
import { createTable } from './createTable.js';

(() => {
	window.addEventListener('load', function() {


		updateTable();
		configAddLogBtn();

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
