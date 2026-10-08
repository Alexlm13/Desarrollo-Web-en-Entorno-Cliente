// EJERCICIO 1
function randomUnoCero(){
    return Math.round(Math.random());
}

function randomCienDoscientos(){
    return Math.floor(Math.random()*101+100);
}

function randomUsuario(n1,n2){
    let min=Math.min(n1,n2);
    let max=Math.max(n1,n2)
    return Math.floor(Math.random()*(max-min+1)+min);
}


// EJERCICIO 2
function seno(n){
    let radiante=Math.PI*n/180;
    return Math.sin(radiante);
}

function coseno(n){
    let radiante=Math.PI*n/180;
    return Math.cos(radiante);
}

function tangente(n){
    let radiante=Math.PI*n/180;
    return Math.tan(radiante);
}


// EJERCICIO 3
function hipotenusa(c1,c2){
    return Math.hypot(c1,c2);
}



// EJERCICIO 4
function hipotenusaVarias(){
    let c1;
    let c2;
    let salida;

    do {
        c1=prompt("Introduzca un cateto");
        c2=prompt("Introduzca otro cateto");
        console.log(hipotenusa(c1,c2));
        salida=prompt("Para salir escriba: salir")
    } while (salida!="salir");

    return "Consulte el log para ver los resultados"
}



// EJERCICIO 5

function ecuacionSuma(a,b,c){
    let resultado;

    resultado=((-b)+(Math.sqrt((b*b)-4*(a*c))))/(2*a);

    return resultado;
}

function ecuacionResta(a,b,c){
    let resultado;

    resultado=((-b)-(Math.sqrt((b*b)-4*(a*c))))/(2*a);

    return resultado;
}

function ecuacionSegundoGrado(a,b,c){
    let resultado1=ecuacionSuma(a,b,c);
    let resultado2=ecuacionResta(a,b,c);

    return "Resultado 1: "+resultado1+" Resultado 2: "+resultado2
}



// EJERCICIO 6
function potencia(b,e){
    return Math.pow(2,3);
}



// EJERCICIO 7
function tablaSeno(n){
    let tabla="<table border='1'>"

    for (let i = 1; i <= n; i++) {
        tabla += "<tr>";
        tabla += `<td>${i}</td>`;
        tabla += `<td>${seno(i)}</td>`;
        tabla += "</tr>";
    }
    tabla+="</table>"

    return tabla;
}



// EJERCICIO 8
function imagenRandom(){
    let num=Math.floor(Math.random()*3)+1;

    if (num==1) {
        return `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVy5SYTFQUzA_Q-u2OoJcXuprhhgAWf7W3jGHxGehhA&s=10">`
    }else if (num==2) {
        return `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfswevoDMeAR5Mnd6VjIIX1NQPyXYPVi2FcTN7F52rgA&s=10">`
    }else{
        return `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdf_9Gc4Dgfp9HpIkgJdRdRL3ScSlfbZ6EwuvKkh3UYQ&s=10">`
    }
}