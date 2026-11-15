const revelarTexto=()=>{
    let texto=document.getElementById("texto");
    texto.textContent="Esta es la parte visible del documento...";

    let resto=document.getElementById("resto");
    resto.textContent="Y esta es la parte que no se ve";
    resto.style.display="none";

    let enlace=document.getElementById("enlace");
    
    enlace.addEventListener("click", (event)=>{
        event.preventDefault();
        resto.style.display="block";
    })
}


(function(){
    window.onload=()=>{
        revelarTexto();
    }
})()