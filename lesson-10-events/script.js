'use strict';
var str = [
  {p: 'Для внесения вашего сайта в каталог, заполните форму:', name: 'form'},
  {label:'Разработчики: ', type:'text', name:'author', width: '300px', required:'true', class:'control'},
  {label:'Название сайта: ', type:'text', name:'title', width: '289px',required:'true', class:'control'},
  {label:'URL сайта: ', type:'text', name:'site', width: '321px', required:'true', class:'control'},
  {label:'Дата запуска сайта: ', type:'text', name:'startdate', width: '265px', required:'true', class:'control'},
  {label:'Посетителей в сутки: ', type:'text', name:'persons', width: '252px', required:'true', class:'control'},
  {label:'E-mail для связи: ', type:'email', name:'title', width: '281px', required:'true', class:'control'},
  {label:'Рубрика каталога: ', type:'select', name:'name', options:[{value:'1',text:'бытовая техника'},{value:'2', text:'компьютеры'}, {value:'3', text:'медицина'}],class:'control'},
  {label:'Размещение: ', type:'radio' , name:'public', options:[{value:'1', text:'бесплатное '},{value:'2', text:'платное'},{value:'3', text:'VIP'}],class:'control'},
  {label:'Разрешить отзывы: ',type:'checkbox', name:'comments', checked:'true', class:'control'},
  {label:'Описание сайта: ',type:'textarea', width: '285px', height: '100px', name:'article', class:'control'},
  {value:'Опубликовать', type:'submit'}
];

function newForm(arr, form) {
  if(arr) {
    arr.forEach(formInput);
  }
  function formInput(element, index, str) {
    if(element.name == 'form') {
      var newTagEl = document.createElement('p');
      var newTextEl = document.createTextNode(element.p);
      newTagEl.appendChild(newTextEl);
      form.appendChild(newTagEl);
    }
    if(element.type == 'email' ||  element.type == 'text'){
      var newTagEl = document.createElement('p');
      var newLabelEl = document.createElement('label');
      var newInputEl = document.createElement('input');
      var newTextEl = document.createTextNode(element.label);
      newInputEl.type = element.type;
      newInputEl.name = element.name;
      if(element.required) {
        newInputEl.required = true;
      }
      newInputEl.classList.add(element.class);
      newLabelEl.appendChild(newTextEl);
      newLabelEl.appendChild(newInputEl);
      newTagEl.appendChild(newLabelEl);
      form.appendChild(newTagEl);
      newInputEl.style.margin = '2px';
      newInputEl.style.width = element.width;
    }
    if(element.type == 'submit'){
      var newTagEl = document.createElement('p');
      var newInputEl = document.createElement('input');
      newInputEl.type = element.type;
      newInputEl.value = element.value;
      newInputEl.classList.add('btn','btn-primary');
      newTagEl.appendChild(newInputEl);
      form.appendChild(newTagEl);
    }
    if(element.type == 'select'){
      var newTagEl = document.createElement('p');
      var newLabelEl = document.createElement('label');
      var newTextEl = document.createTextNode(element.label);
      var newSelectEl = document.createElement('select');
      newSelectEl.name = element.name;
      newSelectEl.classList.add(element.class);
      newLabelEl.appendChild(newTextEl);
      for(var i = 0; i < element.options.length; i++) {
        var newOptionEl = document.createElement('option');
        newOptionEl.value = element.options[i].value;
        var newTextEl = document.createTextNode(element.options[i].text);
        newOptionEl.appendChild(newTextEl);
        newSelectEl.appendChild(newOptionEl);
      }
      newLabelEl.appendChild(newSelectEl);
      newTagEl.appendChild(newLabelEl);
      form.appendChild(newTagEl);
    }
    if(element.type == 'radio') {
      var newTagEl = document.createElement('p');
      var newLabelEl = document.createElement('label');
      var newTextEl = document.createTextNode(element.label);
      newLabelEl.appendChild(newTextEl);
      newTagEl.appendChild(newLabelEl);
      for( var i = 0; i < element.options.length; i++){
        var newRadioEl = document.createElement('input');
        newRadioEl.value = element.options[i].value;
        newRadioEl.type = 'radio';
        newRadioEl.name = element.name;
        var NewLabelRElement = document.createElement('label');
        var newTextEl = document.createTextNode(element.options[i].text);
        NewLabelRElement.appendChild(newRadioEl);
        NewLabelRElement.appendChild(newTextEl);
        newTagEl.appendChild(NewLabelRElement);
      }
      form.appendChild(newTagEl);
    }
    if(element.type == 'checkbox') {
      var newTagEl = document.createElement('p');
      var newLabelEl = document.createElement('label');
      var newTextEl = document.createTextNode(element.label);
      newLabelEl.appendChild(newTextEl);
      var newCheckEl = document.createElement('input');
      newCheckEl.type = 'checkbox';
      newCheckEl.name = element.name;
      (element.checked) ? newCheckEl.checked = 'true' : newCheckEl.checked = 'false';
      newLabelEl.appendChild(newCheckEl);
      newTagEl.appendChild(newLabelEl);
      form.appendChild(newTagEl);
    }
    if(element.type == 'textarea'){
      var newTagEl = document.createElement('p');
      var newLabelEl = document.createElement('label');
      var newTextEl = document.createTextNode(element.label);
      newLabelEl.appendChild(newTextEl);
      var newTextareaEl = document.createElement('textarea');
      newTextareaEl.style.width = element.width;
      newTextareaEl.style.height = element.height;
      newTextareaEl.name = element.name;
      newTextareaEl.classList.add(element.class);
      newLabelEl.appendChild(newTextareaEl);
      newTagEl.appendChild(newLabelEl);
      form.appendChild(newTagEl);
    }
  }
}
newForm(str, forms);