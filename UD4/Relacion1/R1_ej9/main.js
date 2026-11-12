const arrastrarImagen=()=>{
    let div=document.getElementById("contenedor");
    let img=document.createElement("img");
    let arrastrando=false;
    
    div.appendChild(img);

    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5TE_bNl3ZfFmcwXgDGGE87ExtxgnI2dhoqTheZtXWw&s=10"
    img.style.width="100px";
    img.style.position="absolute";

    img.addEventListener("mousedown",(event)=>{
        console.log(arrastrando);
        arrastrando=true;
        event.preventDefault();
    })

    document.addEventListener("mouseup",()=>{
        console.log(arrastrando);
        arrastrando=false;
    })

    document.addEventListener("mousemove",(event)=>{
        if (arrastrando==true) {
            img.style.left=`${event.clientX-50}px`;
            img.style.top=`${event.clientY-50}px`;
        }
    })
};



(function(){
    window.onload=()=>{
        arrastrarImagen();
    }
})()