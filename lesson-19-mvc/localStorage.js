"use strict";

function TLocalStorage(log) {
  var store = {};
  var self = this;
  
  self.reset = function () {
    store = JSON.parse(localStorage[log]) || {};
  };

  self.addValue = function (key, value) {
    store[key] = value;
    localStorage[log] =JSON.stringify(store);
  };

  self.getValue = function (key) {
    return store[key];
  };
  self.getKeys = function () {
    return Object.keys(store);
  };
  self.deleteValue = function (key) {
    delete store[key];
    localStorage[log] = JSON.stringify(store);
  };
}