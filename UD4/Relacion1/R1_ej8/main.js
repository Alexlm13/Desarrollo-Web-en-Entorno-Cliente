const cambiarAND=()=>{
    let parrafo=document.getElementById("contenido");
    let escrito=document.createElement("input");

    parrafo.appendChild(escrito);

    escrito.addEventListener("blur",()=>{
        if (escrito.value.includes("&")) {
            escrito.value=escrito.value.replaceAll("&", "and");
        }
    })
}

(function(){
    window.onload=()=>{
        cambiarAND();
    }
})()