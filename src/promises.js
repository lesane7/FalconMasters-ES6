const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Operation is OK');
        } else {
            reject('Operation is NOT OK');
        }
    }, 3000)
    // accion a ejecutar
    //resolve();
    //reject();
});

promesa.then((message) => {     //Se ejecutara la funcion si el resolve se encuentra dentro de la promesa 
    alert(message);
});

promesa.catch((message) => {
    alert(message);
});