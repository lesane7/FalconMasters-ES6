const crearObjeto = (names, age) => {
    return {
        names,
        age,
        showInfo() {
            return `${names} has ${age} years old`;
        }
    }
}

console.log(crearObjeto('Isaac Alarca', 4).showInfo())

//Agregar metodos en el interior de un objeto (ArrowFunction abreviada) showInfo
//  showInfo: () => { return `${names} has ${age} years old`;}