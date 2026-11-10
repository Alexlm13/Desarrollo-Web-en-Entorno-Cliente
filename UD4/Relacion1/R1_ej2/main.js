const capturarMovimiento=()=>{
    const posicion=document.getElementById("posicion");

    document.addEventListener("mousemove", (event)=>{
        posicion.textContent=`X: ${event.clientX}, Y:${event.clientY}`
    });
}

(function(){
    capturarMovimiento();
})();