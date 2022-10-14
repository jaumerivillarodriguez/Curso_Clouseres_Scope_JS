//let y const se utilizan cuando queremos que la variable tenga el alcance de bloque 
//var para que sea function Scope(mala práctica)
function fruits(){
    if(true){
        var fruit1 = 'Apple'; //function Scope
        let fruit2 = 'Kiwi'; //Block Scope
        const fruit3 = 'Banana'; //Bloxk Scope
    }
    console.log(fruit1); //solo podemos acceder a Apple ya que var hace que sea Function Scope.
    console.log(fruit2); 
    console.log(fruit3);

}

fruits();