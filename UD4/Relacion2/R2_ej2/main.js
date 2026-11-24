document.addEventListener("DOMContentLoaded", ()=>{
    const contenedor = document.getElementById("contenedor");
    contenedor.style.width="400px";
    let size=16;

    const aumentar=()=>{
        size+=2;
        contenedor.style.fontSize=size+"px";
    }
    const disminuir=()=>{
        size-=2;
        contenedor.style.fontSize=size+"px";
    }

    const justificar=()=>{
        contenedor.style.textAlign="justify";
    }

    const izquierda=()=>{
        contenedor.style.textAlign="left";
    }

    document.getElementById("aumento").addEventListener("click", aumentar);
    document.getElementById("disminuir").addEventListener("click", disminuir);
    document.getElementById("justificar").addEventListener("click", justificar);
    document.getElementById("izquierda").addEventListener("click", izquierda);
})