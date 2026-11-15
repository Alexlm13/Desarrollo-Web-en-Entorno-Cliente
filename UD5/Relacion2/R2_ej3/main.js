const revelarTexto=()=>{
    let texto=document.getElementById("texto");
    texto.textContent="Esta es la parte visible del documento...";

    let resto=document.getElementById("resto");
    resto.textContent="Y esta es la parte que no se ve";
    resto.style.display="none";

    let enlace=document.getElementById("enlace");
    enlace.textContent="Ver artículo"
    
    enlace.addEventListener("click", (event)=>{
        event.preventDefault();

        if(resto.style.display=="none"){
            resto.style.display="block"
            enlace.textContent="Ocultar artículo"
        }else if(resto.style.display=="block"){
            resto.style.display="none"
            enlace.textContent="Ver artículo"
        }
    })
}


(function(){
    window.onload=()=>{
        revelarTexto();
    }
})()