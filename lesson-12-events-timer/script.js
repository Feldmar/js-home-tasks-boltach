'use strict';
var clock = document.getElementById('clock');
var	wrapCenterX = clock.offsetLeft + clock.offsetWidth / 2; 
var	wrapCenterY = clock.offsetTop + clock.offsetHeight / 2; 
var	BaseClock = document.createElement('div');
var	angleValue = 0; 
var	distanceHours = 30; 
var	time = new Date();
var	arrHours = document.createElement('div'); 
var	arrMin = document.createElement('div'); 
var	arrSec = document.createElement('div');
var	degHours = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
var	degMin = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()); 
var	degSec = 6 * time.getSeconds() - 6; 

for (var i = 1; i <= 12; i++) {
	var childEl = document.createElement('div'),
		  angle,
		  clockCenterX,
		  clockCenterY;
	angleValue += distanceHours;
	angle = angleValue / 180 * Math.PI;

	childEl = clock.appendChild(childEl);
	childEl.classList.add('childEl');
	childEl.innerHTML = i;
	clockCenterX = wrapCenterX + 125 * Math.sin(angle); 
	clockCenterY = wrapCenterY - 125 * Math.cos(angle); 
	childEl.style.left = Math.round(clockCenterX - childEl.offsetWidth / 2) + 'px';
	childEl.style.top = Math.round(clockCenterY - childEl.offsetHeight / 2) + 'px';
}

BaseClock = clock.appendChild(BaseClock); 
arrHours = clock.appendChild(arrHours);
arrMin = clock.appendChild(arrMin);
arrSec = clock.appendChild(arrSec),

BaseClock.classList.add('BaseClock'); 
arrHours.classList.add('arrHours');
arrMin.classList.add('arrMin');
arrSec.classList.add('arrSec');

BaseClock.style.left = wrapCenterX - BaseClock.offsetWidth / 2 + 'px';
BaseClock.style.top = wrapCenterY - 50 + 'px';
arrHours.style.top = wrapCenterY - arrHours.offsetHeight + 10 + 'px';
arrHours.style.left = wrapCenterX - arrHours.offsetWidth / 2 + 'px';
arrMin.style.top = wrapCenterY - arrMin.offsetHeight + 10 + 'px';
arrMin.style.left = wrapCenterX - arrMin.offsetWidth / 2 + 'px';
arrSec.style.top = wrapCenterY - arrSec.offsetHeight + 10 + 'px';
arrSec.style.left = wrapCenterX - arrSec.offsetWidth / 2 + 'px';
arrHours.style.transformOrigin = 'center 50px';
arrMin.style.transformOrigin = 'center 110px';
arrSec.style.transformOrigin = 'center 130px';

function arrows() {
	BaseClock.innerHTML = time.toLocaleTimeString();
	degSec += 6; 
	arrSec.style.transform = 'rotate(' + degSec + 'deg)';
	degMin += 6 * (1/60);
	arrMin.style.transform = 'rotate(' + degMin + 'deg)';
	degHours += 6 * (1/360); 
	arrHours.style.transform = 'rotate(' + degHours + 'deg)';
}

window.onload = arrows(); 
window.setInterval (arrows, 1000); 