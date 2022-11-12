var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
		sound.loop = true;
var h2 = document.getElementById('clock');
var currentTime = setInterval(function(){
	var date = new Date();
	var hours = (12 - (date.getHours()));
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
	if (hours < 0) {
		hours = hours * -1;
	} else if (hours == 00) {
		hours = 12;
	} else {
		hours = hours;
	}
	h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
},1000);
function addZero(time) {
		return (time < 10) ? "0" + time : time;
}
function hoursMenu(){
	var select = document.getElementById('alarmhrs');
	var hrs = 12
	for (i=1; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}
hoursMenu();
function minMenu(){
	var select = document.getElementById('alarmmins');
	var min = 59;
	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu();
function secMenu(){
	var select = document.getElementById('alarmsecs');
	var sec = 59;
	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu();
function alarmSet() {
	let hr = document.getElementById('alarmhrs');
	let min = document.getElementById('alarmmins');
	let sec = document.getElementById('alarmsecs');
	let ap = document.getElementById('ampm');
    let selectedHour = hr.options[hr.selectedIndex].value;
    let selectedMin = min.options[min.selectedIndex].value;
    let selectedSec = sec.options[sec.selectedIndex].value;
   let selectedAP = ap.options[ap.selectedIndex].value;
   let alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
    console.log('alarmTime:' + alarmTime);
    document.getElementById('alarmhrs').disabled = true;
	document.getElementById('alarmmins').disabled = true;
	document.getElementById('alarmsecs').disabled = true;
	document.getElementById('ampm').disabled = true;
	let h2 = document.getElementById('clock');
setInterval(function(){
	let date = new Date();
	let hours = (12 - (date.getHours()));
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

	if (hours < 0) {
		hours = hours * -1;
	} else if (hours == 00) {
		hours = 12;
	} else {
		hours = hours;
	}
	var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
	if (alarmTime == currentTime) {
		sound.play();
		}
},1000);
}
function alarmClear() {
	document.getElementById('alarmhrs').disabled = false;
	document.getElementById('alarmmins').disabled = false;
	document.getElementById('alarmsecs').disabled = false;
	document.getElementById('ampm').disabled = false;
	sound.pause();
}


