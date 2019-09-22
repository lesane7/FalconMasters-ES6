const names = ['Isaacs', 'Elkinsw', 'Laura']

const count_caracter = names.map(names => `${names} has ${names.length} caracters`);
//ArrowFunction en una linea podemos omitir return y llaves {}, y () de la variable const
//const count_caracter = names.map((names) => { return `${names} has ${names.length} caracters`; });


// const count_caracter = names.map(function (names) {
//     return `${names} has ${names.length} caracters`;
// });

console.log(count_caracter);


// (param) => {
//    return(code)
// }

