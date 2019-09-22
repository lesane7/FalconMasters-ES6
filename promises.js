"use strict";

var promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var success = true;

    if (success) {
      resolve('Operation is OK');
    } else {
      reject('Operation is NOT OK');
    }
  }, 3000); // accion a ejecutar
  //resolve();
  //reject();
});
promesa.then(function (message) {
  //Se ejecutara la funcion si el resolve se encuentra dentro de la promesa 
  alert(message);
});
promesa["catch"](function (message) {
  alert(message);
});