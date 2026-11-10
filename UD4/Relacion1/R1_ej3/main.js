const mostrarTiempo=()=>{
    let tiempo=document.getElementById("tiempo");
    let inicio=Date.now();

    setInterval(() => {
    const segundos = Math.floor((Date.now() - inicio) / 1000);
    tiempo.textContent = `Tiempo desde la carga: ${segundos} segundos`;
  }, 1000);
}

(function(){
    window.addEventListener("onLoad", mostrarTiempo())
})()