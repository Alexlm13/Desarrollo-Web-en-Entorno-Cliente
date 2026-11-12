const imagenColor=()=>{
    let div=document.getElementById("eventos");
    div.style.marginRight="60%";
    let h1=document.createElement("h1");
    div.appendChild(h1);
    let img=document.createElement("img");    
    img.src="https://i.pinimg.com/1200x/a5/40/b0/a540b0498bad80c0269f21900050c899.jpg";
    h1.appendChild(img);
    img.style.width="200px";
    img.style.height = "80px";

    let escrito=document.createElement("p");
    escrito.textContent="Página que demuestra el funcionamiento de mouseover y mouseout";
    div.appendChild(escrito);

    h1.addEventListener("mouseover",()=>{
        img.src="https://images.vexels.com/media/users/3/236231/isolated/preview/5b1c3bffa604aab44d0030cac9f8fdfe-welcome-spanish-lettering.png";
        h1.appendChild(img);
        img.style.width="200px";
        img.style.height = "80px";
    })
    h1.addEventListener("mouseout",()=>{
        img.src="https://i.pinimg.com/1200x/a5/40/b0/a540b0498bad80c0269f21900050c899.jpg";
        h1.appendChild(img);
        img.style.width="200px";
        img.style.height = "80px";
        
    })
    
    const colores=[
        {codigo: "#0000FF", nombre:"azul"},
        {codigo: "#00FF00", nombre:"verde"},
        {codigo: "#FF0000", nombre:"rojo"},
        {codigo: "#00FFFF", nombre:"celeste"},
        {codigo: "#FF00FF", nombre:"rosa"},
        {codigo: "#FFFFFF", nombre:"blanco"},
        {codigo: "#FFFF00", nombre:"amarillo"},
        {codigo: "#BE72FC", nombre:"violeta"},
        {codigo: "#643B15", nombre:"marrón"},
        {codigo: "#FF7300", nombre:"naranja"},
        {codigo: "#4D4D5C", nombre:"gris"},
        {codigo: "#57009E", nombre:"morado"},
    ]
    
    let tabla=document.createElement("table");
    div.appendChild(tabla);
    tabla.style.border="2px solid black";

    tabla.style.backgroundColor="lightgrey";
    
    
    colores.forEach(element => {
        let fila=document.createElement("tr");
        tabla.appendChild(fila);
        let celda=document.createElement("td");
        celda.textContent=element.codigo;
        fila.appendChild(celda);

        celda.addEventListener("mouseover",()=>{
            celda.style.backgroundColor=element.codigo;
            celda.style.color=element.codigo;
        })

        celda.addEventListener("mouseout", ()=>{
            celda.style.backgroundColor="lightgrey";
            celda.textContent=element.nombre;
            celda.style.color=""
        })
    });
}


(function(){
    window.onload=()=>{
        imagenColor();
    }
})()