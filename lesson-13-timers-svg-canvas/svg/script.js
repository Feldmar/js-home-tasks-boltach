'use strict';

var svg = document.getElementById('clock');
var widthSvg = 300; 
var heightSvg = 300; 
var xmlnsOfSvg = 'http://www.w3.org/2000/svg';
var svgCenterX;
var svgCenterY;
var analogWatch;
var analogWatchCX = 150;
var analogWatchCY = 150;
var analogWatchRadius = 150; 
var analogWatchColor = 'yellow';
var svgElForElWatch;
var svgElForElWatchText;
var radiusElWatch = 70;
var radius = 120;
var angleValue = 0;
var distanceOfDigits = 30;
var time = new Date();
var arrHours;
var arrHoursHeight = 50;
var arrHoursWidth = 9;
var arrMinutes;
var arrMinutesHeight = 110;
var arrMinutesWidth = 5;
var arrSeconds;
var arrSecondsHeight = 135;
var arrSecondsWidth = 2;
var hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()); 
var minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()); 
var secondsDeg = 6 * time.getSeconds() - 6;
var numHours = 12; 

function createSvgWatch(){
	svg.style.width = widthSvg;
	svg.style.height = heightSvg;
	svg.style.xmlns = xmlnsOfSvg;

	analogWatch = document.createElementNS(xmlnsOfSvg, 'circle');
	analogWatch.setAttribute('cx', analogWatchCX);
	analogWatch.setAttribute('cy', analogWatchCY);
	analogWatch.setAttribute('r', analogWatchRadius);
	analogWatch.setAttribute('fill', analogWatchColor);
	svg.appendChild(analogWatch); 

	svgCenterX = svg.getBoundingClientRect().left + svg.getBoundingClientRect().width / 2; 
	svgCenterY = svg.getBoundingClientRect().top + svg.getBoundingClientRect().height / 2; 

	for (var i = 1; i <= numHours; i++) {
		var svgChildElem = document.createElementNS(xmlnsOfSvg, 'circle');
		var svgChildElemText = document.createElementNS(xmlnsOfSvg, 'text');
		var angle;
		var smallCircleCX;
		var smallCircleCY;
		var smallCircleRadius = 20;
		var smallCircleColor = 'green';
	
		angleValue += distanceOfDigits;
		angle = angleValue / 180 * Math.PI;
	
		smallCircleCX = Math.round(svgCenterX + radius * Math.sin(angle) - svg.getBoundingClientRect().left);
		smallCircleCY = Math.round(svgCenterY - radius * Math.cos(angle) - svg.getBoundingClientRect().top);
	
		svgChildElem.setAttribute('cx', smallCircleCX);
		svgChildElem.setAttribute('cy', smallCircleCY);
		svgChildElem.setAttribute('r', smallCircleRadius);
		svgChildElem.setAttribute('fill', smallCircleColor);
		svgChildElem = svg.appendChild(svgChildElem);
	
		svgChildElemText.innerHTML = i;
		svgChildElemText.setAttribute('x', smallCircleCX);
		svgChildElemText.setAttribute('y', smallCircleCY);
		svgChildElemText.setAttribute('text-anchor', 'middle');
		svgChildElemText.setAttribute('dominant-baseline', 'central');
		svgChildElemText.style.fontSize = 20;
		svgChildElemText = svg.appendChild(svgChildElemText);
	}
}

function createElWatch(){
	svgElForElWatch = document.createElementNS(xmlnsOfSvg, 'rect');
	svg.appendChild(svgElForElWatch);
	svgElForElWatch.setAttribute('x', (svgCenterX - svgElForElWatch.getBoundingClientRect().width / 2) - svg.getBoundingClientRect().left);
	svgElForElWatch.setAttribute('y', (svgCenterY - radiusElWatch) - svg.getBoundingClientRect().left);
	svgElForElWatch.setAttribute('fill', 'none');
	svgElForElWatchText = document.createElementNS(xmlnsOfSvg, 'text');
	svgElForElWatchText.setAttribute('x', (svgCenterX - svgElForElWatch.getBoundingClientRect().width / 2) - svg.getBoundingClientRect().left);
	svgElForElWatchText.setAttribute('y', (svgCenterY - radiusElWatch) - svg.getBoundingClientRect().top);
	svgElForElWatchText.setAttribute('text-anchor', 'middle');
	svgElForElWatchText.setAttribute('dominant-baseline', 'central');
	svgElForElWatchText.style.fontSize = 25;
	svgElForElWatchText = svg.appendChild(svgElForElWatchText);
}

function arrowHours(){
	arrHours = document.createElementNS(xmlnsOfSvg, 'line');
	arrHours.setAttribute('x1', svgCenterX - svg.getBoundingClientRect().left);
	arrHours.setAttribute('y1', svgCenterY - arrHoursHeight - svg.getBoundingClientRect().top);
	arrHours.setAttribute('x2', svgCenterX - svg.getBoundingClientRect().left);
	arrHours.setAttribute('y2', svgCenterY);
	arrHours.setAttribute('stroke', 'black');
	arrHours.setAttribute('stroke-width', arrHoursWidth);
	arrHours.setAttribute('stroke-linecap', 'round');
	svg.appendChild(arrHours);
	arrHours.style.transformOrigin = 'center 150px';
}

function arrowMinutes(){
	arrMinutes = document.createElementNS(xmlnsOfSvg, 'line');
	arrMinutes.setAttribute('x1', svgCenterX - svg.getBoundingClientRect().left);
	arrMinutes.setAttribute('y1', svgCenterY - arrMinutesHeight - svg.getBoundingClientRect().top);
	arrMinutes.setAttribute('x2', svgCenterX - svg.getBoundingClientRect().left);
	arrMinutes.setAttribute('y2', svgCenterY);
	arrMinutes.setAttribute('stroke', 'black');
	arrMinutes.setAttribute('stroke-width', arrMinutesWidth);
	arrMinutes.setAttribute('stroke-linecap', 'round');
	svg.appendChild(arrMinutes);
	arrMinutes.style.transformOrigin = 'center 150px';
}

function arrowSeconds(){
	arrSeconds = document.createElementNS(xmlnsOfSvg, 'line');
	arrSeconds.setAttribute('x1', svgCenterX - svg.getBoundingClientRect().left);
	arrSeconds.setAttribute('y1', svgCenterY - arrSecondsHeight - svg.getBoundingClientRect().top);
	arrSeconds.setAttribute('x2', svgCenterX - svg.getBoundingClientRect().left);
	arrSeconds.setAttribute('y2', svgCenterY);
	arrSeconds.setAttribute('stroke', 'red');
	arrSeconds.setAttribute('stroke-width', arrSecondsWidth);
	arrSeconds.setAttribute('stroke-linecap', 'round');
	svg.appendChild(arrSeconds);
	arrSeconds.style.transformOrigin = 'center 150px';
}

function tick() {
	createSvgWatch();
	createElWatch();
	arrowHours();
	arrowMinutes();
	arrowSeconds();

	var time = new Date(); 
	svgElForElWatchText.innerHTML = time.toLocaleTimeString();
	secondsDeg += 6; 
	arrSeconds.style.transform = 'rotate(' + secondsDeg + 'deg)';
	minutesDeg += 6 * (1/60);
	arrMinutes.style.transform = 'rotate(' + minutesDeg + 'deg)';
	hoursDeg += 6 * (1/360);
	arrHours.style.transform = 'rotate(' + hoursDeg + 'deg)';
}

window.onload = tick(); 
window.setInterval(tick, 1000); 