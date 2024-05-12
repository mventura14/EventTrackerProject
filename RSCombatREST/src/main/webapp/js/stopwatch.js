



export let startStopwatch = function() {
    if (!isRunning) {
        this.timer = setInterval(updateStopwatch, 1000);
        isRunning = true;
        this.toggleBtn.textContent = 'Stop';
    } else {
        clearInterval(this.timer);
        isRunning = false;
       	this.toggleBtn.textContent = 'Start';
    }
}

export let updateStopwatch = function() {
    this.seconds++;
    if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        }
    }
    displayElement.textContent = formatTime(this.hours) + ":" + formatTime(this.minutes) + ":" + formatTime(this.seconds);
}

export function resetStopwatch() {
    clearInterval(this.timer);
    this.isRunning = false;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.displayElement.textContent = '00:00:00';
   	this.toggleBtn.textContent = 'Start';
}

export function formatTime() {
    return (this.time < 10) ? "0" + this.time : this.time;
}

document.getElementById('startStopBtn').addEventListener('click', stopwatchObj.startStopwatch);
document.getElementById('resetBtn').addEventListener('click', stopwatchObj.resetStopwatch);