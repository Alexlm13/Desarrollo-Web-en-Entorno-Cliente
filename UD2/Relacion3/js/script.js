// EJERCICIO1
//a)
function invierteCadena(frase) {
    let fraseInvertida="";
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida+=frase[i];
  }
  return fraseInvertida;
}


//b)
function inviertePalabras(frase){
    let arrayFrase=frase.split(" ");
    let nuevaFrase="";
    for (let i = arrayFrase.length-1; i >= 0; i--) {
        nuevaFrase+=arrayFrase[i]+" ";
    }
    return nuevaFrase.trim();
}

//c)
function encuentraPalabraMasLarga(frase){
    let arrayFrase=frase.split(" ");
    let palabraLarga="";
    for (let i = 0; i < arrayFrase.length; i++) {
        if (arrayFrase[i].length>palabraLarga.length) {
            palabraLarga=arrayFrase[i];
        }
    }
    return palabraLarga;
}

//d)
function filtraPalabrasMasLargas(frase, i){
    let palabraLarga=encuentraPalabraMasLarga(frase);
    if(palabraLarga.length>i){
        return palabraLarga;
    }
}

//e)
function cadenaBienFormada(frase){
    let primeraLetra=frase.slice(0,1);
    let resto=frase.slice(1,frase.length);
    let newFrase=primeraLetra.toUpperCase()+resto.toLowerCase();
    return newFrase;
}


// EJERCICIO2

function infoCadena(frase){
    if(frase==frase.toUpperCase()){
        return "La frase está solo en mayúscula.";
    }else if(frase==frase.toLowerCase()){
        return "La frase está solo en minúscula.";
    }else{
        return "Es una combinación de ambas.";
    }
}


// EJERCICIO3
function cuantaSubcadena(cadena, subcadena) {
    let cont=0;
    let posicion=cadena.indexOf(subcadena);
    while (posicion !== -1) {
        cont++;
        posicion=cadena.indexOf(subcadena, posicion + subcadena.length);
    }
    return cont;
}