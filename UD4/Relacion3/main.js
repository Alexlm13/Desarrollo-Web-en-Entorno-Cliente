document.addEventListener("DOMContentLoaded",()=>{
    const cuadrados=document.querySelectorAll(".cuadrado");

    let colores=[];
    let correcto="";
    let vidas=3;

    const aleatorio=()=>Math.floor(Math.random()*256);

    const crearColor=()=>`rgb(${aleatorio()},${aleatorio()},${aleatorio()})`;

    for (let i = 0; i < 6; i++) {
        colores[i] = crearColor();
    }

    
})