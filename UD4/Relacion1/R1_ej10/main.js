const arrastrarImagen=()=>{
    let div=document.getElementById("contenedor");
    
    let imagenActiva=null;
    
    const urls=[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5TE_bNl3ZfFmcwXgDGGE87ExtxgnI2dhoqTheZtXWw&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSN-3GwDFk2WDlsvXsTdAC5cgy3SlsBB6l9oCIgjd54g&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5ETKMYGoQHQSWiNx7hYouJcSM7bTEwaJZdPkGZM0bA&s=10"
    ]

    urls.forEach((url, indice)=>{
        let img=document.createElement("img");
        img.src=url;
        img.style.width="100px";
        img.style.position="absolute";
        img.style.left=`${indice*120}px`;
        div.appendChild(img);

        img.addEventListener("mousedown",(event)=>{
            event.preventDefault();
            imagenActiva=img;
            
        })
    })

    document.addEventListener("mouseup",()=>{
        imagenActiva=null;
    })

    document.addEventListener("mousemove",(event)=>{
        if (imagenActiva) {
            imagenActiva.style.left=`${event.clientX-50}px`;
            imagenActiva.style.top=`${event.clientY-50}px`;
        }
    })
};



(function(){
    window.onload=()=>{
        arrastrarImagen();
    }
})()