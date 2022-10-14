//las variables que se declaran y asignan en una función solo se podran utilizar dentro del bloque
function saludo(){
    let userName = 'Jaume'
    console.log(userName);

    if (userName==='Jaume'){
        console.log(`Hola ${userName}!`);
    }
}

saludo();

console.log(userName); //userName is not defined