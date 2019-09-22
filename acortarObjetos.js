"use strict";

var crearObjeto = function crearObjeto(names, age) {
  return {
    names: names,
    age: age,
    showInfo: function showInfo() {
      return "".concat(names, " has ").concat(age, " years old");
    }
  };
};

console.log(crearObjeto('Isaac Alarca', 4).showInfo()); //Agregar metodos en el interior de un objeto (ArrowFunction abreviada) showInfo
//  showInfo: () => { return `${names} has ${age} years old`;}