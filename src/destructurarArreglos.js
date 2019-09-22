//Acceder a una posicion y extraer elementos especificos del arreglo 
//transforma los elementos de un arreglo en variables para acceder mas facil 

const person = ['Elkin Waldo', '41', 'Colombia']

// Metodo tradicional en JS
// const names = person[0];
// const contry = person[2];

// console.log(contry)
// console.log(names)

//ES6
const [names, aged, country, skill = 'Bilingue'] = person;

const viewInfo = ([names, , country, skill = 'Bilingue'] = person) => console.log(names, country, skill)


viewInfo(person)

