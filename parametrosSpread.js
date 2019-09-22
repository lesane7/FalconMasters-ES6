"use strict";

var showDates = function showDates() {
  for (var _len = arguments.length, dates = new Array(_len), _key = 0; _key < _len; _key++) {
    dates[_key] = arguments[_key];
  }

  console.log(dates);
};

var arrayDates = ['Isaac Alarca', 4, 'bestseller@edu.co', 'Colombia_Med'];
showDates.apply(void 0, arrayDates); //por el parametro Spread podemos enviar los argumentos a partir de un array por ej.