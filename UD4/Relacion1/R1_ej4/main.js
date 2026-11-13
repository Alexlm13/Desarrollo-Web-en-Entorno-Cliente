const crearCanvas=()=>{
    let div=document.getElementById("contenido");
    let tabla=document.createElement("table");
    tabla.style.borderCollapse="collapse";

    div.appendChild(tabla);

    for (let i = 0; i <100; i++) {
        let fila=document.createElement("tr");
        tabla.appendChild(fila);
        for (let j = 0; j < 100; j++) {
            let celda=document.createElement("td");
            fila.appendChild(celda);
            celda.style.width="4px";
            celda.style.height="4px";
            celda.style.border="1px";
            celda.style.padding="0";
            celda.addEventListener("mousemove",(event)=>{
                console.log("celda")
                if (event.ctrlKey) {
                    celda.style.backgroundColor="red";
                }else if(event.shiftKey){
                    celda.style.backgroundColor="blue";
                }
            });
        }        
    }
}


(function(){
    window.onload=crearCanvas;
})();