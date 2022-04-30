'use strict';
var canava = document.getElementById('clock');
var ctx = canava.getContext('2d');
var canavaCenterX = canava.offsetWidth / 2; //центр по x
var canavaCenterY = canava.offsetHeight / 2; //центр по y
var radius = 120;
var angleValue = 0;
var numHours = 12; //цифры часов от 0 до 12
var intervalNum = 30; //расстояние между цифрами на циферблате
var elWatch; //для электронных часов
var elWatchText;
var elWatchWidth = 90; //ширина электронных часов
var elWatchHeight = 25; //высота электронных часов
var radiusElWatch = 70; //расстояние электронных часов
var arrHours; // часовая стрелка
var arrHoursHeight = 60; //длинна часовой стрелки
var arrHoursWidth = 9; //ширина часовой стрелки
var arrMinutes; //минутная стрелка
var arrMinutesHeight = 105; //длинна минутной стрелки
var arrMinutesWidth = 5; //ширина минутной стрелки
var arrSeconds; //секундная стрелка
var arrSecondsHeight = 130; //длинна секундной стрелки
var arrSecondsWidth = 3; //ширина секундной стрелки
var hoursDeg; //положение часовой стрелки
var minutesDeg; //положение минутной стрелки
var secondsDeg; //положение секундной стрелки

function analogWatch() {
	ctx.beginPath();
	ctx.fillStyle = 'yellow';
  ctx.arc(canavaCenterX, canavaCenterY, 150, 0, Math.PI * 2, false);
  ctx.fill();

  for(var i = 1; i <= numHours; i++){
    var miniCircleCX;
    var miniCircleCY;
    var miniCircleRadius = 20;
    var miniCircleColor = 'green';
    var angle;

		angleValue += intervalNum;
		angle = angleValue / 180 * Math.PI;
		miniCircleCX = Math.round(canavaCenterX + radius * Math.sin(angle));
		miniCircleCY = Math.round(canavaCenterY - radius * Math.cos(angle));
    
		ctx.beginPath();
		ctx.fillStyle = miniCircleColor;
		ctx.arc(miniCircleCX, miniCircleCY, miniCircleRadius, 0, Math.PI * 2, false);
		ctx.fill();
		ctx.fillStyle = 'white';
		ctx.font = 'normal normal 18px "Montserrat"';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(i, miniCircleCX, miniCircleCY);
  }
}

function elWatch() { //электронные часы
	var time = new Date(); //текущее время
	ctx.globalCompositeOperation = 'source-over';
	ctx.beginPath();
	ctx.fillStyle = 'yellow';
	ctx.fillRect(canavaCenterX - elWatchWidth / 2, canavaCenterY - radiusElWatch - elWatchHeight / 2, 100, 25);
	ctx.fill();
	ctx.fillStyle = 'black';
	elWatchText = time.toLocaleTimeString();
	ctx.font = 'normal normal 20px "Montserrat"';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(elWatchText, canavaCenterX, canavaCenterY - radiusElWatch);	
	ctx.fill();
}

function arrowHours() {
	var time = new Date();
	hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.lineWidth = arrHoursWidth;
	ctx.lineCap = 'round';
	ctx.moveTo(canavaCenterX, canavaCenterY);
	ctx.lineTo(canavaCenterX + arrHoursHeight * Math.sin(hoursDeg / 180 * Math.PI), canavaCenterY - arrHoursHeight * Math.cos(hoursDeg / 180 * Math.PI));
	ctx.stroke();
}
function arrowMinutes() {
	var time = new Date();
	minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.lineWidth = arrMinutesWidth;
	ctx.lineCap = 'round';
	ctx.moveTo(canavaCenterX, canavaCenterY);
	ctx.lineTo(canavaCenterX + arrMinutesHeight * Math.sin(minutesDeg/180*Math.PI), canavaCenterY - arrMinutesHeight * Math.cos(minutesDeg/180*Math.PI));
	ctx.stroke();
  
}
function arrowSeconds() {
	var time = new Date();
	secondsDeg = 6 * time.getSeconds();
	ctx.beginPath(); 
	ctx.strokeStyle = 'red';
	ctx.lineWidth = arrSecondsWidth;
	ctx.lineCap = 'round';
	ctx.moveTo(canavaCenterX, canavaCenterY);
	ctx.lineTo(canavaCenterX + arrSecondsHeight * Math.sin(secondsDeg/180*Math.PI), canavaCenterY - arrSecondsHeight * Math.cos(secondsDeg/180*Math.PI));
	ctx.stroke();
}

function tick() {
	analogWatch(); 
	elWatch(); 
	arrowHours(); 
	arrowMinutes(); 
	arrowSeconds(); 
}

window.onload = tick(); 
window.setInterval (tick, 1000); 