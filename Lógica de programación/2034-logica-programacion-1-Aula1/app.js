let parametro=0;

parametro= parseInt(prompt("Indica hasta que número te gustaría adivinar"));



let numeroSecreto =Math.floor(Math.random()*parametro+1);
let numeroUsuario =0;
let intentos =1;
let maximosintentos=3;

while (numeroUsuario != numeroSecreto) {
    
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${parametro} por favor:`));

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        //Se cumple la condicion
        if(intentos == 1) {
            alert(`Acertaste, el numero es: ${numeroUsuario}, en ${intentos} intento`);
        }else {
            alert(`Acertaste, el numero es: ${numeroUsuario}, en ${intentos} intentos`);
        }
        
    } else{
        if (numeroUsuario > numeroSecreto){
            alert("El numero que esperamos es menor");
        } else{
            alert("El numero secreto es mayor");
        }
        //No se cumple la condicion
        //alert("El numero no es correcto");


        //Incrementa cuando la persona no acierta
        intentos++;

        if(intentos>maximosintentos) {
            alert(`Llegaste al numero maximo de ${maximosintentos} intentos, y el numero correcto era ${numeroSecreto}, mejor suerte la proxima`)
            break;
        }
    }
}