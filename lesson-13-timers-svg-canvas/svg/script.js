'use strict';

var svg = document.getElementById('clock'),
	  widthSvg = 300, 
	  heightSvg = 300, 
	  xmlnsOfSvg = 'http://www.w3.org/2000/svg', 
	  svgCenterX,
	  svgCenterY,
	  bigCircle, 
	  bigCircleCX = 150, 
	  bigCircleCY = 150, 
	  bigCircleRadius = 150, 
	  bigCircleColor = 'yellow',
	  svgElForElWatch, 
	  svgElForElWatchText,
	  radiusElWatch = 70, 
	  radius = 120, 
	  angleValue = 0, 
	  distanceOfDigits = 30, 
	  time = new Date(), 
	  arrHours, 
	  arrHoursHeight = 50,
	  arrHoursWidth = 9,
	  arrMinutes, 
	  arrMinutesHeight = 110,
	  arrMinutesWidth = 5,
	  arrSeconds, 
	  arrSecondsHeight = 135,
	  arrSecondsWidth = 2,
	  hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()), 
	  minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()), 
	  secondsDeg = 6 * time.getSeconds() - 6, 
	  numHours = 12; 

svg.style.width = widthSvg;
svg.style.height = heightSvg;
svg.style.xmlns = xmlnsOfSvg;


bigCircle = document.createElementNS(xmlnsOfSvg, 'circle');
bigCircle.setAttribute('cx', bigCircleCX);
bigCircle.setAttribute('cy', bigCircleCY);
bigCircle.setAttribute('r', bigCircleRadius);
bigCircle.setAttribute('fill', bigCircleColor);
svg.appendChild(bigCircle); 

svgCenterX = svg.getBoundingClientRect().left + svg.getBoundingClientRect().width / 2; 
svgCenterY = svg.getBoundingClientRect().top + svg.getBoundingClientRect().height / 2; 

for (var i = 1; i <= numHours; i++) {
	var svgChildElem = document.createElementNS(xmlnsOfSvg, 'circle'),
		  svgChildElemText = document.createElementNS(xmlnsOfSvg, 'text'),
		  angle,
	  	smallCircleCX,
		  smallCircleCY,
		  smallCircleRadius = 20,
		  smallCircleColor = 'green';

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

arrHours = document.createElementNS(xmlnsOfSvg, 'line');
arrHours.setAttribute('x1', svgCenterX - svg.getBoundingClientRect().left);
arrHours.setAttribute('y1', svgCenterY - arrHoursHeight - svg.getBoundingClientRect().top);
arrHours.setAttribute('x2', svgCenterX - svg.getBoundingClientRect().left);
arrHours.setAttribute('y2', svgCenterY);
arrHours.setAttribute('stroke', 'black');
arrHours.setAttribute('stroke-width', arrHoursWidth);
arrHours.setAttribute('stroke-linecap', 'round');
svg.appendChild(arrHours);

arrMinutes = document.createElementNS(xmlnsOfSvg, 'line');
arrMinutes.setAttribute('x1', svgCenterX - svg.getBoundingClientRect().left);
arrMinutes.setAttribute('y1', svgCenterY - arrMinutesHeight - svg.getBoundingClientRect().top);
arrMinutes.setAttribute('x2', svgCenterX - svg.getBoundingClientRect().left);
arrMinutes.setAttribute('y2', svgCenterY);
arrMinutes.setAttribute('stroke', 'black');
arrMinutes.setAttribute('stroke-width', arrMinutesWidth);
arrMinutes.setAttribute('stroke-linecap', 'round');
svg.appendChild(arrMinutes);

arrSeconds = document.createElementNS(xmlnsOfSvg, 'line');
arrSeconds.setAttribute('x1', svgCenterX - svg.getBoundingClientRect().left);
arrSeconds.setAttribute('y1', svgCenterY - arrSecondsHeight - svg.getBoundingClientRect().top);
arrSeconds.setAttribute('x2', svgCenterX - svg.getBoundingClientRect().left);
arrSeconds.setAttribute('y2', svgCenterY);
arrSeconds.setAttribute('stroke', 'red');
arrSeconds.setAttribute('stroke-width', arrSecondsWidth);
arrSeconds.setAttribute('stroke-linecap', 'round');
svg.appendChild(arrSeconds);

arrHours.style.transformOrigin = 'center 150px';
arrMinutes.style.transformOrigin = 'center 150px';
arrSeconds.style.transformOrigin = 'center 150px';

function arrows() {
	var time = new Date(); 
	svgElForElWatchText.innerHTML = time.toLocaleTimeString();
	secondsDeg += 6; 
	arrSeconds.style.transform = 'rotate(' + secondsDeg + 'deg)';
	minutesDeg += 6 * (1/60);
	arrMinutes.style.transform = 'rotate(' + minutesDeg + 'deg)';
	hoursDeg += 6 * (1/360);
	arrHours.style.transform = 'rotate(' + hoursDeg + 'deg)';
}

window.onload = arrows(); 
window.setInterval(arrows, 1000); 