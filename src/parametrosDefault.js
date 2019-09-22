function registerUser(nombre, pais, correo, cel = '345678') {
    return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Celular: ${cel}`;
}

console.log(registerUser('Isaac', 'Colombia', 'best@edu.co'))