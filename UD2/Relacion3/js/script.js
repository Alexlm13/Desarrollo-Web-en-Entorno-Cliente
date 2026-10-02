// EJERCICIO1
//a)
function invierteCadena(frase) {
  let fraseInvertida = "";
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida += frase[i];
  }
  return fraseInvertida;
}

//b)
function inviertePalabras(frase) {
  let arrayFrase = frase.split(" ");
  let nuevaFrase = "";
  for (let i = arrayFrase.length - 1; i >= 0; i--) {
    nuevaFrase += arrayFrase[i] + " ";
  }
  return nuevaFrase.trim();
}

//c)
function encuentraPalabraMasLarga(frase) {
  let arrayFrase = frase.split(" ");
  let palabraLarga = "";
  for (let i = 0; i < arrayFrase.length; i++) {
    if (arrayFrase[i].length > palabraLarga.length) {
      palabraLarga = arrayFrase[i];
    }
  }
  return palabraLarga;
}

//d)
function filtraPalabrasMasLargas(frase, i) {
  let palabraLarga = encuentraPalabraMasLarga(frase);
  if (palabraLarga.length > i) {
    return palabraLarga;
  }
}

//e)
function cadenaBienFormada(frase) {
  let primeraLetra = frase.slice(0, 1);
  let resto = frase.slice(1, frase.length);
  let newFrase = primeraLetra.toUpperCase() + resto.toLowerCase();
  return newFrase;
}

// EJERCICIO2

function infoCadena(frase) {
  if (frase == frase.toUpperCase()) {
    return "La frase está solo en mayúscula.";
  } else if (frase == frase.toLowerCase()) {
    return "La frase está solo en minúscula.";
  } else {
    return "Es una combinación de ambas.";
  }
}

// EJERCICIO3
function cuantaSubcadena(cadena, subcadena) {
  let cont = 0;
  let posicion = cadena.indexOf(subcadena);
  while (posicion !== -1) {
    cont++;
    posicion = cadena.indexOf(subcadena, posicion + subcadena.length);
  }
  return cont;
}

// EJERCICIO4
function separarVocales(frase) {
  arrayFrase = frase.split("");
  let vocales = "";
  let consonantes = "";
  let separacion = "";
  for (i = 0; i < arrayFrase.length; i++) {
    if (
      arrayFrase[i].toLowerCase() == "a" ||
      arrayFrase[i].toLowerCase() == "e" ||
      arrayFrase[i].toLowerCase() == "i" ||
      arrayFrase[i].toLowerCase() == "o" ||
      arrayFrase[i].toLowerCase() == "u"
    ) {
      vocales += arrayFrase[i];
    } else if (arrayFrase[i] == " ") {
    } else {
      consonantes += arrayFrase[i];
    }
  }
  separacion = consonantes + vocales;
  return separacion;
}

//EJERCICIO5
function eliminaRepetidos(frase) {
  let arrayFrase = frase.split("");
  let fraseSinRepeticiones = "";

  for (let i = 0; i < frase.length; i++) {
    if (arrayFrase[i] != arrayFrase[i - 1]) {
      fraseSinRepeticiones += arrayFrase[i];
    }
  }
  return fraseSinRepeticiones;
}

//EJERCICIO6
function posicionSubcadena(cadena, subcadena) {
  let posicion = cadena.indexOf(subcadena);

  if (posicion == -1) {
    return "No se encuentra la posición de la subcadena";
  } else {
    return posicion;
  }
}

//EJERCICIO7
function palindromo(frase) {
  if (invierteCadena(frase) == frase) {
    return "Es un palíndromo";
  } else {
    return "No es un palíndromo";
  }
}

//EJERCICIO8
function contadorPalabras(cadena) {
  let arrayFrase = cadena.split(" ");
  let cont = 0;

  for (i = 0; i < arrayFrase.length; i++) {
    cont++;
  }

  return cont;
}

//EJERCICIO9
function validateCreditCard(tarjeta) {
  // COMPRUEBO QUE TENGA 16 DIGITOS
  if (tarjeta.length != 16) {
    return false;
  }

  // COMPRUEBO QUE SOLO SEA NUMERICO
  for (let i = 0; i < tarjeta.length; i++) {
    if (isNaN(tarjeta[i])) {
      return false;
    }
  }

  // COMPRUEBO QUE NO TENGA SOLO NUMEROS REPETIDOS
  let diferentes = false;
  for (let i = 0; i < tarjeta.length; i++) {
    if (tarjeta[i] != tarjeta[0]) {
      diferentes = true;
    }
  }

  if (diferentes == false) {
    return false;
  }

  // COMPRUEBO QUE EL ULTIMO NUMERO SEA PAR
  if (tarjeta[tarjeta.length - 1] % 2 != 0) {
    return false;
  }

  // COMPRUEBO QUE LA SUMA DE LOS DIGITOS SEA MAYORES QUE 16
  let digitos = 0;
  for (let i = 0; i < tarjeta.length; i++) {
    digitos += parseInt(tarjeta[i]);
  }
  if (digitos <= 16) {
    return false;
  }


  return true;
}



// EJERCICIO10
function validateCreditCard2(tarjeta){
    tarjeta=tarjeta.replaceAll("-","");
    return validateCreditCard(tarjeta);
}