(function(){
    let cantidad=document.querySelectorAll("a");
    console.log(cantidad.length);

    let penultimo=cantidad[cantidad.length-2];
    console.log(penultimo.href);

    let google=document.querySelectorAll('a[href="https://www.google.com"]');
    console.log(google.length);

    let parrafos = document.querySelectorAll("p");
    let tercero = parrafos[2];
    let enlacesTercero = tercero.querySelectorAll("a");
    console.log(enlacesTercero.length);
})()