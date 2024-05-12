

export let createStopwatch = function(obj) {
	return {

		toggle: obj.toggle,
		toggleBtn: obj.toggleBtn,
		resetBtn: obj.resetBtn,
		hour: obj.hour,
		minute: obj.minute,
		second: obj.second,

		running: false,

		toggleTimer: toggleTimer,
		reset: resetTimer,
		update: updateTimer,
		timer: () => { },
		activate: activateEventListeners
	}
}

let toggleTimer = function() {

	if (this.running) {
		this.toggle.textContent = 'Start'
		this.running = false
		clearInterval(this.timer);
	} else {
		this.toggle.textContent = 'Stop'
		this.running = true
		this.timer = setInterval(() => this.update(this), 1000)
		document.addLog.submit.disabled = true;
	}
}


let resetTimer = function() {
	this.running = false;
	this.hour.value = '00';
	this.minute.value = '00';
	this.second.value = '00';
}

let updateTimer = function(obj) {

	let hour = Number(this.hour.value)
	let minute = Number(this.minute.value)
	let second = Number(this.second.value)

	second += 1;

	if (second >= 60) {
		second = 0;
		minute += 1;
	}
	if (minute >= 60) {
		minute = 0;
		hour += 1;
	}
	if (hour >= 24) {
		hour = 0;
	}

	this.second.value = second < 10 ? `0${second}` : second;
	this.minute.value = minute < 10 ? `0${minute}` : minute;
	this.hour.value = hour < 10 ? `0${hour}` : hour;



}

let activateEventListeners = function() {

	this.toggleBtn.addEventListener('click', () => {
		this.toggleTimer();
		this.hour.disabled = true;
		this.minute.disabled = true;
		this.second.disabled = true;

	})

	this.resetBtn.addEventListener('click', () => {
		console.log(this.running)
		if (!this.running) {
			this.reset();
			this.hour.disabled = false;
			this.minute.disabled = false;
			this.second.disabled = false;
		}

	})
}