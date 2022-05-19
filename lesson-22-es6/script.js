'use strict';
const div = document.getElementById('page');

let ElPArray;
let articleArray;
let sidebar;

function contentPage(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  switchToState({page: 'contents'});
}

function articlePage(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  if (EO.target.tagName === 'A') {
    switchToState({page: 'article ' + EO.target.attributes[0].value});
  }
}

function switchToState(state) {
  return location.hash = encodeURIComponent(JSON.stringify(state));
}

window.addEventListener('hashchange', render, false);

function render() {
  let state = decodeURIComponent(location.hash.substr(1));

  (state === '') ? (state = {page: 'main'}) : (state = JSON.parse(state));

  if (state.page.substr(0, 7) === 'article') {
    createArticlePage();
  }

  switch (state.page) {
    case 'main':
      createMain();
      break;
    case 'contents':
      createContent();
      break;
  }
}

render();

function createMain() {
  const header = document.createElement('b');
  header.innerHTML = 'Энциклопедия';
  header.style.fontSize = 40 + 'px';
  const contentsLink = document.createElement('a');
  contentsLink.innerHTML = 'Список статей';
  contentsLink.href = '';
  const br = document.createElement('br');
  div.innerHTML = '';
  div.appendChild(header);
  div.appendChild(br);
  div.appendChild(contentsLink);
  contentsLink.addEventListener('click', contentPage, false);
}

function createContent() {
  const header = document.createElement('b');
  header.innerHTML = 'Оглавление';
  header.style.fontSize = 40 + 'px';
  const br = document.createElement('br');
  const divContentEl = document.createElement('div');
  divContentEl.id = 'content';
  const letterArr = ['a', 'b', 's', 'p'];
  for (let z = 0; z < letterArr.length; z++) {
    let pEl = document.createElement('p');
    pEl.innerHTML = letterArr[z];
    divContentEl.appendChild(pEl);
  }

  div.innerHTML = '';
  div.appendChild(header);
  div.appendChild(br);
  div.appendChild(divContentEl);

  ElPArray = document.querySelectorAll('p');

  refreshArticles();

  document.addEventListener('click', articlePage, false);
}

function createArticlePage() {

  div.innerHTML = '';

  let state = JSON.parse(decodeURIComponent(location.hash.substr(1)));
  let src = state.page.substr(8);

  $.ajax(
    {
      url: src + '.html',
      type: 'GET',
      dataType: 'html',
      success: function (EO) {
        div.innerHTML = EO;
        div.insertAdjacentHTML('afterbegin', `<div id='sidebar' style="float: left; width: 100px; margin: 30px"></div>`);
        sidebar = document.getElementById('sidebar');
        if (!articleArray) {
          refreshArticles();
        } else {
          createSideBar();
        }
      },
      error: errorHandler
    });
}

function createSideBar() {
  sidebar = document.getElementById('sidebar');
  for (let i = 0; i < articleArray.length; i++) {
    let article = articleArray[i];
    sidebar.insertAdjacentHTML('afterbegin', `<a href= ${article.href}>${article.name}</a><br>`);
  }
}


var password;

function sendMessage() {
  password = Math.random();
  $.ajax(
    {
      url: "http://fe.it-academy.by/AjaxStringStorage2.php",
      type: 'POST',
      data: {
        f: 'LOCKGET',
        n: 'Articles',
        p: password
      },
      cache: false,
      success: lockGetReady,
      error: errorHandler
    }
  );
}

function lockGetReady(resultH) {
  if (resultH.error !== undefined)
    alert(resultH.error);
  else {
    articleArray = [
      {name: 'annenmaykantereit', href: 'annenmaykantereit'},
      {name: 'bts', href: 'bts'},
      {name: 'splin', href: 'splin'},
      {name: 'pyrokinesis', href: 'pyrokinesis'}];
    if (resultH.result !== "") {
      articleArray = [
      {name: 'annenmaykantereit', href: 'annenmaykantereit'},
      {name: 'bts', href: 'bts'},
      {name: 'splin', href: 'splin'},
      {name: 'pyrokinesis', href: 'pyrokinesis'}];
      if (!articleArray.length)
        articleArray = [];
    }

    $.ajax(
      {
        url: "http://fe.it-academy.by/AjaxStringStorage2.php",
        type: 'POST',
        data: {
          f: 'UPDATE',
          n: 'Articles',
          v: JSON.stringify(articleArray),
          p: password
        },
        cache: false,
        success: updateReady,
        error: errorHandler
      }
    );
  }
}

function updateReady(resultH) {
  if (resultH.error !== undefined)
    alert(resultH.error);
}

sendMessage();

function refreshArticles() {
  $.ajax(
    {
      url: "http://fe.it-academy.by/AjaxStringStorage2.php",
      type: 'POST',
      data: {f: 'READ', n: 'Articles'},
      cache: false,
      success: readReady,
      error: errorHandler
    }
  );
}

function readReady(ResultH) {
  if (ResultH.error !== undefined)
    alert(ResultH.error);
  else {
    articleArray = [];
    if (ResultH.result !== "") {
      articleArray = JSON.parse(ResultH.result);
      if (!articleArray.length)
        articleArray = [];
    }
    if (JSON.parse(decodeURIComponent(location.hash.substr(1))).page.substr(0, 7) !== 'article') {
      showArticles();
    } else {
      document.addEventListener('click', articlePage, false);
      createSideBar();
    }
  }
}

function showArticles() {
  for (let i = 0; i < articleArray.length; i++) {
    let article = articleArray[i];
    switch (article.name.charAt(0)) {
      case 'a':
        ElPArray[0].insertAdjacentHTML('afterend', `<a href= ${article.href}>${article.name}</a>`);
        break;
      case 'b':
        ElPArray[1].insertAdjacentHTML('afterend', `<a href= ${article.href}>${article.name}</a>`);
        break;
      case 's':
        ElPArray[2].insertAdjacentHTML('afterend', `<a href= ${article.href}>${article.name}</a>`);
        break;
      case 'p':
        ElPArray[3].insertAdjacentHTML('afterend', `<a href= ${article.href}>${article.name}</a>`);
        break;
    }
  }
}

function errorHandler(jqXHR, StatusStr, ErrorStr) {
  alert(StatusStr + ' ' + ErrorStr);
}