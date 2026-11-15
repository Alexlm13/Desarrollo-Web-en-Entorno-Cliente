const cambioPagina=()=>{
    let css=document.getElementById("css");
    
    let linkNormal=document.getElementById("normal");
    linkNormal.textContent="Tema Normal";

    let minimalista=document.getElementById("minimalista");
    minimalista.textContent="Tema Minimalista";

    let titulo=document.getElementById("titulo");
    titulo.textContent="Pagina de ejemplo";

    let p1=document.getElementById("p1");
    p1.textContent="En esta pagina vamos a comprobar lo facil que es aplicar estilos mediante css a un documento seleccionado";
    
    let p2=document.getElementById("p2");
    p2.textContent="Lo ideal es que al seleccionar un estilo este permanezca siempre igual para el uisuario. Hasta ahora no hemos visto como hacerlo, ¿se te ocurre como podremos hacerlo?";
    
    let p3=document.getElementById("p3");
    p3.textContent="Utilizando CSS podemos incluso ocultar partes del sitio.";
    p3.style.display="none";

    let p4=document.getElementById("p4");
    p4.textContent="Este parrafo debe ser solo visible en el tema Normal";
    p4.style.display="none";

    let p5=document.getElementById("p5");
    p5.textContent="Esto esta dentro de un marco";

    minimalista.addEventListener("click",(event)=>{
        event.preventDefault();
        p3.style.display="none";
        p4.style.display="none";
        css.href="";
    })

    linkNormal.addEventListener("click",(event)=>{
        event.preventDefault();
        css.href="estilos.css";
        p3.style.display="block";
        p4.style.display="block";
    })
}


(function(){
    window.onload=()=>{
        cambioPagina();
    }
})()