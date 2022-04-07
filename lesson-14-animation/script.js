"use strict";
var wrap = document.getElementById('tennis'),
	widthWrap = "700px", //ширина игрового поля
	heightWrap = "350px", //высота игрового поля
	buttonStart = document.createElement("input"), //кнопка старт
	score = document.createElement("div"), //счет
	scorePlayer1 = 0, //счет первого игрока
	scorePlayer2 = 0, //счет второго игрока
	racquetLeft = document.createElement("div"), //левая ракетка
	racquetRight = document.createElement("div"), //правая ракетка
	racquetH, 
	racquetAreaH, 
	ball = document.createElement("div"),//мяч
	ballSize = '30px', 
	ballH, 
	areaH, 
	timer; //таймер

wrap.style.width = widthWrap;
wrap.style.height = heightWrap;

ball.style.width = ballSize;
ball.style.height = ballSize;

requestAnimationFrame(tick);

buttonStart.type = "button"; 
buttonStart.value = "старт!"; 

buttonStart = document.body.insertBefore(buttonStart, document.body.children[0]);
buttonStart.onclick = start; 

score.classList.add('score');
scorePlayers(); 
score = document.body.insertBefore(score, document.body.children[1]);


racquetLeft.classList.add('racquetLeft');
racquetRight.classList.add('racquetRight');

racquetLeft = wrap.appendChild(racquetLeft); 
racquetRight = wrap.appendChild(racquetRight); 

racquetH = {
	racquet1PosX: wrap.getBoundingClientRect().left,
	racquet1PosY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - racquetLeft.getBoundingClientRect().height/2,
	racquet1Speed: 0,
	racquetRightPosX: wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquetRight.getBoundingClientRect().width,
	racquetRightPosY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - racquetLeft.getBoundingClientRect().height/2,
	racquetRightSpeed: 0,
	width: 10,
	height: 120,

	update: function() {
				var racquet1Obj = racquetLeft,
					racquetRightObj = racquetRight;
					racquet1Obj.style.left = this.racquet1PosX + "px";
					racquet1Obj.style.top = this.racquet1PosY + "px";
					racquetRightObj.style.left = this.racquetRightPosX + "px";
					racquetRightObj.style.top = this.racquetRightPosY + "px";					
			}
};

racquetAreaH = {
	width: 10,
	height: wrap.getBoundingClientRect().height
};
racquetH.update();

ball.classList.add('ball'); 
ball = wrap.appendChild(ball); 

ballH = {
	posX: wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width/2 - ball.getBoundingClientRect().width/2,
	posY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - ball.getBoundingClientRect().height/2,
	speedX: 0,
	speedY: 0,
	width: 30,
	height: 30,

	update: function() {
				var ballObj = ball;
				ballObj.style.left = this.posX + "px";
				ballObj.style.top = this.posY + "px";
			}
};

areaH = {
	width: wrap.getBoundingClientRect().width,
	height: wrap.getBoundingClientRect().height
};

ballH.update();

//прописываем движение ракеток при нажатии кнопок
window.addEventListener("keydown", function(EO) {
	EO = EO || window.event;
  EO.preventDefault();
  switch(true) {
    case EO.keyCode === 17:
   		racquetH.racquet1Speed = 5;
      break;
    case EO.keyCode === 16:
   		racquetH.racquet1Speed = -5;
      break;
    case EO.keyCode === 40:
   		racquetH.racquetRightSpeed = 5;
      break;
    case EO.keyCode === 38:
   		racquetH.racquetRightSpeed = -5;
      break;
  }
});
window.addEventListener("keyup", function(EO) {
	EO = EO || window.event;
  EO.preventDefault();
  switch(true) {
    case EO.keyCode === 17 : 
   		racquetH.racquet1Speed = 0;
      break;
    case EO.keyCode === 16:
   		racquetH.racquet1Speed = 0;
      break;
    case EO.keyCode === 40:
   		racquetH.racquetRightSpeed = 0;
      break;
    case EO.keyCode === 38:
   		racquetH.racquetRightSpeed = 0;
      break;
	}
});

function scorePlayers() {
	score.innerHTML = scorePlayer1 + ":" + scorePlayer2;
}

function start() {
	ballH.speedX = 8;
	ballH.speedY = 3;
}

//ф-ция для того чтоб мяч двигался, не выходило из рамки и т.д.
function tick() {
	racquetH.update();
	racquetH.racquet1PosY += racquetH.racquet1Speed;
  racquetH.racquetRightPosY += racquetH.racquetRightSpeed;
  ballH.posX -= ballH.speedX;
  ballH.posY -= ballH.speedY;

  switch(true){
	case racquetH.racquet1PosY + racquetH.height > wrap.getBoundingClientRect().top + racquetAreaH.height:
		racquetH.racquet1PosY = wrap.getBoundingClientRect().top + racquetAreaH.height - racquetH.height;
    break;
	case racquetH.racquet1PosY < wrap.getBoundingClientRect().top:
		racquetH.racquet1PosY = wrap.getBoundingClientRect().top;
    break;
	case racquetH.racquetRightPosY + racquetH.height > wrap.getBoundingClientRect().top + racquetAreaH.height:
		racquetH.racquetRightPosY = wrap.getBoundingClientRect().top + racquetAreaH.height - racquetH.height;
	  break;
	case racquetH.racquetRightPosY < wrap.getBoundingClientRect().top :
		racquetH.racquetRightPosY = wrap.getBoundingClientRect().top;
	  break;  
	case (ballH.posY + ballH.height < racquetH.racquetRightPosY || ballH.posY > (racquetH.racquetRightPosY + racquetH.height)) && ballH.posX + ballH.width >= (wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width):
		scorePlayer1 += 1;
		scorePlayers();
		ballH.speedX = 0;
		ballH.speedY = 0;
		ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - ballH.width - 1;
		timer = window.setTimeout(function () {
			ballH.posX = wrap.getBoundingClientRect().left + racquetH.width;
			ballH.posY = racquetH.racquet1PosY + racquetH.height/2;
			start();
		}, 1000);
    break;
  case !(ballH.posY + ballH.height < racquetH.racquetRightPosY || ballH.posY > (racquetH.racquetRightPosY + racquetH.height)) && ballH.posX+ballH.width > (racquetH.racquetRightPosX):
		ballH.speedX =- ballH.speedX;
    ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquetH.width - ballH.width;
	  break;
	case (ballH.posY + ballH.height < racquetH.racquet1PosY || ballH.posY > (racquetH.racquet1PosY + racquetH.height)) && ballH.posX <= (wrap.getBoundingClientRect().left):
		scorePlayer2 += 1;
		scorePlayers();
		ballH.speedX = 0;
		ballH.speedY = 0;
		ballH.posX = wrap.getBoundingClientRect().left + 1;
		timer = window.setTimeout(function () {
			ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquetH.width;
			ballH.posY = racquetH.racquetRightPosY + racquetH.height/2;
			start();
		}, 1000);
	  break;
  case !(ballH.posY + ballH.height < racquetH.racquet1PosY || ballH.posY > (racquetH.racquet1PosY + racquetH.height)) && ballH.posX < (racquetH.width + racquetH.racquet1PosX):
		ballH.speedX =- ballH.speedX;
    ballH.posX = wrap.getBoundingClientRect().left + racquetH.width;
    break;
  case ballH.posY + ballH.height > wrap.getBoundingClientRect().top + areaH.height:
    ballH.speedY =- ballH.speedY;
    ballH.posY = wrap.getBoundingClientRect().top + areaH.height - ballH.height;
    break;
  case ballH.posY < wrap.getBoundingClientRect().top:
    ballH.speedY =- ballH.speedY;
    ballH.posY = wrap.getBoundingClientRect().top;
    break;
  }

  ballH.update();
  requestAnimationFrame(tick);
}