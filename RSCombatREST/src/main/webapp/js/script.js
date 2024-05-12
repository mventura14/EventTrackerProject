import {updateTable,configAddLogBtn} from './display.js'
import { makeGetRequest, makePostRequest } from "./httpRequest.js";
import { createTable } from './createTable.js';

(() => {
	window.addEventListener('load', function() {


		updateTable();

		configAddLogBtn();
	})


})()
