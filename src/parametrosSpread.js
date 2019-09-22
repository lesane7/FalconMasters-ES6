const showDates = (...dates) => {
    console.log(dates);
}

const arrayDates = ['Isaac Alarca', 4, 'bestseller@edu.co', 'Colombia_Med'];
showDates(...arrayDates);

//por el parametro Spread podemos enviar los argumentos a partir de un array por ej.