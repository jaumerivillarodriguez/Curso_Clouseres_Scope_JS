function saludar(){
    let username = 'Jaume';

    function displayUserName(){
        return `Hello ${username}`;

    }
    return displayUserName;
}

const g = saludar();
console.log(g); //retornamos  la definición de la funcion
console.log(g()); //ejecutamos la función