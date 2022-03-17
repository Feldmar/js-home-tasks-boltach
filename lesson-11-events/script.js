'use strict';
window.onload = function locationEl(EO) {
  EO = EO || window.event;
  var element = document.getElementsByTagName('img');
  for (var i = element.length - 1; i >= 0; i--) {
    var el = element[i];
    el.style.top = el.offsetTop + 'px';
    el.style.left = el.offsetLeft + 'px';
    el.style.cursor = 'grab';
    el.style.position = 'absolute';
    el.onmousedown = impact;
    el.onmouseup = release;
  }
  function impact(EO) {
    EO = EO || window.event;
    EO.preventDefault();
    var impactY = EO.pageY - EO.target.offsetTop;
    var impactX = EO.pageX - EO.target.offsetLeft;
    var relocat = document.getElementById('cat');
    var image = EO.target;
    relocat.appendChild(image);
    window.onmousemove = drag; 
    function drag(EO) {
      EO = EO || window.event;
      EO.preventDefault();
      image.style.top = (EO.pageY - impactY) + 'px';
      image.style.left = (EO.pageX - impactX) + 'px';
    }
  }
  function release(EO) {
    EO.preventDefault();
    window.onmousemove = null; 
  }
};