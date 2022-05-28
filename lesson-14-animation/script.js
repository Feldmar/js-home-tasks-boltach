'use strict';
var wrap = document.getElementById('tennis'),
		widthWrap = '700px', //ширина игрового поля
		heightWrap = '350px', //высота игрового поля
		areaWrap, //переменная для работы с wrap
		buttonStart = document.createElement('input'), //кнопка старт
		score = document.createElement('div'), //счет
		scorePlayerLeft = 0, //счет игрока слева
		scorePlayerRight = 0, //счет игрока справа
		racquetLeft = document.createElement('div'), //левая ракетка
		racquetRight = document.createElement('div'), //правая ракетка
		racquet, //переменная для работы с ракетками
		racquetArea, // переменная для работы с пространством передвижения ракеток
		ball = document.createElement('div'),//мяч
		ballSize = '30px', //размер мяча
		ballH, //переменная для работы с передвижениями мяча
		timer; //таймер

requestAnimationFrame(mode);	

//wrap
wrap.style.width = widthWrap;
wrap.style.height = heightWrap;
areaWrap = {
	width: wrap.getBoundingClientRect().width,
	height: wrap.getBoundingClientRect().height
};

//кнопка
buttonStart.type = 'button'; 
buttonStart.value = 'старт!'; 
buttonStart = document.body.insertBefore(buttonStart, document.body.children[0]);
buttonStart.onclick = start; 

//счет
score.classList.add('score');
scorePlayers(); 
score = document.body.insertBefore(score, document.body.children[1]);

function scorePlayers() {//функция для отображения счета
	score.innerHTML = scorePlayerLeft + ':' + scorePlayerRight;
}

//ракетки
racquetLeft.classList.add('racquetLeft');
racquetRight.classList.add('racquetRight');
racquetLeft = wrap.appendChild(racquetLeft); 
racquetRight = wrap.appendChild(racquetRight); 

racquet = {
	racquetLeftPosX: wrap.getBoundingClientRect().left,
	racquetLeftPosY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - racquetLeft.getBoundingClientRect().height/2,
	racquetLeftSpeed: 0,
	racquetRightPosX: wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquetRight.getBoundingClientRect().width,
	racquetRightPosY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - racquetLeft.getBoundingClientRect().height/2,
	racquetRightSpeed: 0,
	width: 10,
	height: 120,
	update: function() {
		var racquetLeftObj = racquetLeft,
				racquetRightObj = racquetRight;
				racquetLeftObj.style.left = this.racquetLeftPosX + 'px';
				racquetLeftObj.style.top = this.racquetLeftPosY + 'px';
				racquetRightObj.style.left = this.racquetRightPosX + 'px';
				racquetRightObj.style.top = this.racquetRightPosY + 'px';					
		}
};
racquetArea = {
	width: 10,
	height: wrap.getBoundingClientRect().height
};
racquet.update();

//мяч
ball.style.width = ballSize;
ball.style.height = ballSize;
ball.classList.add('ball'); 
ball = wrap.appendChild(ball); 

function start() {
	ballH.speedX = 8;
	ballH.speedY = 3;
}

ballH = {
	posX: wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width/2 - ball.getBoundingClientRect().width/2,
	posY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height/2 - ball.getBoundingClientRect().height/2,
	speedX: 0,
	speedY: 0,
	width: 30,
	height: 30,
	update: function() {
		var ballObj = ball;
				ballObj.style.left = this.posX + 'px';
				ballObj.style.top = this.posY + 'px';
	}
};
ballH.update();

//прописываем движение ракеток при нажатии кнопок
window.addEventListener('keydown', function(EO) {
	EO = EO || window.event;
  EO.preventDefault();
  switch(true) {
    case EO.keyCode === 17:
   		racquet.racquetLeftSpeed = 5;
      break;
    case EO.keyCode === 16:
   		racquet.racquetLeftSpeed = -5;
      break;
    case EO.keyCode === 40:
   		racquet.racquetRightSpeed = 5;
      break;
    case EO.keyCode === 38:
   		racquet.racquetRightSpeed = -5;
      break;
  }
});
window.addEventListener('keyup', function(EO) {
	EO = EO || window.event;
  EO.preventDefault();
  switch(true) {
    case EO.keyCode === 17 : 
   		racquet.racquetLeftSpeed = 0;
      break;
    case EO.keyCode === 16:
   		racquet.racquetLeftSpeed = 0;
      break;
    case EO.keyCode === 40:
   		racquet.racquetRightSpeed = 0;
      break;
    case EO.keyCode === 38:
   		racquet.racquetRightSpeed = 0;
      break;
	}
});

//функция описывающая движение мяча, поведение при столкновении с рамками
function mode() {
	racquet.update();
	racquet.racquetLeftPosY += racquet.racquetLeftSpeed;
  racquet.racquetRightPosY += racquet.racquetRightSpeed;
  ballH.posX -= ballH.speedX;
  ballH.posY -= ballH.speedY;

  switch(true){
	case racquet.racquetLeftPosY + racquet.height > wrap.getBoundingClientRect().top + racquetArea.height:
		racquet.racquetLeftPosY = wrap.getBoundingClientRect().top + racquetArea.height - racquet.height;
    break;
	case racquet.racquetLeftPosY < wrap.getBoundingClientRect().top:
		racquet.racquetLeftPosY = wrap.getBoundingClientRect().top;
    break;
	case racquet.racquetRightPosY + racquet.height > wrap.getBoundingClientRect().top + racquetArea.height:
		racquet.racquetRightPosY = wrap.getBoundingClientRect().top + racquetArea.height - racquet.height;
	  break;
	case racquet.racquetRightPosY < wrap.getBoundingClientRect().top :
		racquet.racquetRightPosY = wrap.getBoundingClientRect().top;
	  break;  
	case (ballH.posY + ballH.height < racquet.racquetRightPosY || ballH.posY > (racquet.racquetRightPosY + racquet.height)) && ballH.posX + ballH.width >= (wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width):
		scorePlayerLeft += 1;
		scorePlayers();
		ballH.speedX = 0;
		ballH.speedY = 0;
		ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - ballH.width - 1;
		timer = window.setTimeout(function () {
			ballH.posX = wrap.getBoundingClientRect().left + racquet.width;
			ballH.posY = racquet.racquetLeftPosY + racquet.height/2;
			start();
		}, 1000);
    break;
  case !(ballH.posY + ballH.height < racquet.racquetRightPosY || ballH.posY > (racquet.racquetRightPosY + racquet.height)) && ballH.posX+ballH.width > (racquet.racquetRightPosX):
		ballH.speedX =- ballH.speedX;
    ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquet.width - ballH.width;
	  break;
	case (ballH.posY + ballH.height < racquet.racquetLeftPosY || ballH.posY > (racquet.racquetLeftPosY + racquet.height)) && ballH.posX <= (wrap.getBoundingClientRect().left):
		scorePlayerRight += 1;
		scorePlayers();
		ballH.speedX = 0;
		ballH.speedY = 0;
		ballH.posX = wrap.getBoundingClientRect().left + 1;
		timer = window.setTimeout(function () {
			ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquet.width;
			ballH.posY = racquet.racquetRightPosY + racquet.height/2;
			start();
		}, 1000);
	  break;
  case !(ballH.posY + ballH.height < racquet.racquetLeftPosY || ballH.posY > (racquet.racquetLeftPosY + racquet.height)) && ballH.posX < (racquet.width + racquet.racquetLeftPosX):
		ballH.speedX =- ballH.speedX;
    ballH.posX = wrap.getBoundingClientRect().left + racquet.width;
    break;
  case ballH.posY + ballH.height > wrap.getBoundingClientRect().top + areaWrap.height:
    ballH.speedY =- ballH.speedY;
    ballH.posY = wrap.getBoundingClientRect().top + areaWrap.height - ballH.height;
    break;
  case ballH.posY < wrap.getBoundingClientRect().top:
    ballH.speedY =- ballH.speedY;
    ballH.posY = wrap.getBoundingClientRect().top;
    break;
  }
  ballH.update();
  requestAnimationFrame(mode);
}