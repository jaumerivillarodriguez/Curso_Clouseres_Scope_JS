var firstName ; //declarar valor = undefined
firstName = 'Jaume';
console.log(firstName);

var lastName = 'Oscar'; //declrar y asiganr
lastName = 'David'; //reasignar
console.log(lastName);

var secondName = 'Pedro';
var secondName = 'Iris'; //Reasicnación
console.log(secondName);

//let 
let fruit = 'Manzana'; //declarar y asignar
fruit = 'Kiwi'; //reasignar

//let fruit = 'Banana'; //no se puede volver a declarar con let

//const
const animal = 'perro'; //declarar y asignar
animal = 'gato'; //no se puede reasignar ni volver a declarar con const


const vehiculos = [];
vehiculos.push('coche'); //si que se puede con metodos (mutable)
console.log(vehiculos); 