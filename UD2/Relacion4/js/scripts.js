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


// EJERCICIO2
function seno(n){
    return Math.sin((Math.PI*n)/180);
}

function coseno(n){
    return Math.cos((Math.PI*n)/180);
}

function tangente(n){
    return Math.tan((Math.PI*n)/180);
}