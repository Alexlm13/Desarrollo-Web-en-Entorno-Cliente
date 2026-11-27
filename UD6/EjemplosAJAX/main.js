const showTexto=(strDatos)=>{
    document.getElementById("idRespuesta").innerText=strDatos;
}

const showDatos=(datos)=>{
    console.log("datos", datos)
    const contenedor=document.getElementById("idRespuesta");

    datos.forEach(dato => {
        let tarjeta=document.createElement("div");
        tarjeta.classList.add("tarjeta");
        
        let id=document.createElement("p");
        let title=document.createElement("p");
        let precio=document.createElement("p");

        id.innerHTML=`<strong>ID:</strong> ${dato.id}`;
        title.innerHTML=`<strong>Producto:</strong> ${dato.title}`;
        precio.innerHTML=`<strong>Precio:</strong> ${dato.price} €`;

        tarjeta.appendChild(id);
        tarjeta.appendChild(title);
        tarjeta.appendChild(precio);

        contenedor.appendChild(tarjeta);
    });

}

const getDatos=()=>{
    fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then((datos)=>{
            console.log(datos)
            showDatos(datos)
        })
        

        console.log('cargando datos...')
}

// const getDatos=()=>{
//     fetch('https://fakestoreapi.com/products')
//         .then(response=>response.text())
//         .then((texto)=>{
//             console.log(texto)
//             showDatos(texto)
//         })
        

//         console.log('cargando datos...')
// }


document.getElementById("btn").addEventListener("click", ()=>getDatos())