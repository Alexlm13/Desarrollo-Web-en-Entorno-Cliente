const mostrarLista=()=>{
    let lista=document.getElementById("lista");
    let final=document.getElementById("final");
    let boton=document.getElementById("mostrar");
    boton.textContent="Mostrar";

    const listado=[
        "manzana",
        "pera",
        "plátano",
        "naranja",
        "fresa",
        "uva",
        "sandía",
        "melón",
        "piña",
        "cereza"
    ]

    let indice=0;

    boton.addEventListener("click",(event)=>{
        event.preventDefault();

        if (indice>=listado.length) {
            final.style.display="block";
            final.textContent="La lista se ha acabado."
            return;
        }
        let palabra=document.createElement("li");
        lista.appendChild(palabra);
        palabra.textContent=listado[indice];
        indice++;
    })
}


(function(){
    window.onload=()=>{
        mostrarLista();
    }
})()