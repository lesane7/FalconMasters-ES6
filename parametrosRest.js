"use strict";

var showDates = function showDates() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

showDates('Isaac', 4, 'best@edu.co', 'colombia'); //por el parametro Rest podemos recibir todos los argumentos sin necesidad de escribirlos