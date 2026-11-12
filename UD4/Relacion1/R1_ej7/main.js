const ayudaFocus=()=>{
    // RECOGIDA DE DATOS
    let p1=document.getElementById("nombre");
    let p2=document.getElementById("correo");
    let p3=document.getElementById("comentario");
    let ayuda=document.getElementById("ayuda");
    let boton1=document.getElementById("enviar");
    let boton2=document.getElementById("resetear");
    
    // CREACION DE ELEMENTOS
    let label1=document.createElement("label");
    let label2=document.createElement("label");
    let label3=document.createElement("label");


    // INPUT NOMBRE
    p1.appendChild(label1);
    let nombre=document.createElement("input");    
    label1.innerHTML="Nombre: <br>";
    label1.appendChild(nombre);
    nombre.addEventListener("focus",()=>{
        ayuda.textContent="Escribe tu nombre";
    })
    nombre.addEventListener("blur",()=>{
        ayuda.textContent="";
    })
    
    // INPUT CORREO
    p2.appendChild(label2);
    let correo=document.createElement("input");
    label2.innerHTML="Correo: <br>";
    label2.appendChild(correo);
    correo.addEventListener("focus",()=>{
        ayuda.textContent="Escribe tu correo electrónico";
    })
    correo.addEventListener("blur",()=>{
        ayuda.textContent="";
    })

    // INPUT COMENTARIO
    p3.appendChild(label3);
    let comentario=document.createElement("textarea");
    label3.innerHTML="Comentario: <br>";
    label3.appendChild(comentario);
    comentario.addEventListener("focus",()=>{
        ayuda.textContent="Escribe un comentario";
    })
    comentario.addEventListener("blur",()=>{
        ayuda.textContent="";
    })
    
    // BOTON ENVIAR
    boton1.type="submit";
    boton1.addEventListener("focus",()=>{
        ayuda.textContent="Botón para enviar formulario";
    })
    boton1.addEventListener("blur",()=>{
        ayuda.textContent="";
    })
    
    // BOTON RESETEAR
    boton2.type="reset";
    boton2.addEventListener("focus",()=>{
        ayuda.textContent="Botón para reiniciar formulario";
    })
    boton2.addEventListener("blur",()=>{
        ayuda.textContent="";
    })
}


(function(){
    window.onload=()=>{
        ayudaFocus();
    }
})()