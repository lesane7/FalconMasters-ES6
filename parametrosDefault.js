"use strict";

function registerUser(nombre, pais, correo) {
  var cel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '345678';
  return "Nombre: ".concat(nombre, ", Pais: ").concat(pais, ", Correo: ").concat(correo, ", Celular: ").concat(cel);
}

console.log(registerUser('Isaac', 'Colombia', 'best@edu.co'));