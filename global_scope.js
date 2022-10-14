// variables

var a; //declarar variable
var b = 'b'; //declarar y asignar
b = 'bb' //reasignar
var a = 'aa' //redeclaración

// Global Scope


var fruit = 'Apple'; //Global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

//Si solo se asigna la variable será global

function countries(){
    country = 'Colombia'; //globlal
    console.log(country);
}

countries();
console.log(country);