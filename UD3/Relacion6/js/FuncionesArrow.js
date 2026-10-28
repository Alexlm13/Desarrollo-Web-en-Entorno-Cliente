// EJERCICIO 1

// function sum(num1, num2) {
//     return num1 + num2
// }

// sum(40, 2)
// sum(42, 0)

let suma = (a, b) => a + b;

console.log(suma(40, 2));

// function stringLength(str) {
//   console.log(`the length of "${str}" is:`, str.length);
// }

// let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

// stringLength(longestCityNameInTheWorld);

let longitud = (frase) => console.log(`La longitud de ${frase} es: ${frase.length}`);

longitud("Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu");

// function stringLength(str) {
//   let length = str.length;
//   console.log(`the length of "${str}" is:`, length);
//   return str.length;
// }

// stringLength("willynilly");

let long2=(frase)=>{
    let length=frase.length;
    console.log(`La longitud de ${frase} es: ${frase.length}`);
    return length;
}

long2("willynilly");


let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"] 
 
// function showAlert(name){     
//     alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`) 
// } 
 
// showAlert("you ball of fluff");

let alerta=(nombre)=>alert(alerts[Math.floor(Math.random()*alerts.length)]+" "+nombre);

alerta("Pepe");