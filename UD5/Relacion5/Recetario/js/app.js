import db from '../data/recetas_daw.json' with {type:'json'};

const pintarRecetas=(lista)=>{
    let contenido=document.getElementById("listado");
    
    contenido.innerHTML=lista
        .map(receta=>`
        <section>
            <div>
                <h5>${receta.nombre}</h5>
                <p>${receta.descripcion}<p>
            </div>
        </section>`
    )
        .join("");
}

const filtrarRecetas=(texto)=>{
    const busqueda=texto.toLowerCase();

    return db.recetas.filter(receta=>receta.nombre.toLowerCase().includes(busqueda))
}

const iniciar=()=>{
    let boton=document.getElementById("buscar");
    let buscador=document.getElementById("buscador");

    pintarRecetas(db.recetas);

    boton.addEventListener("click",(event)=>{
        event.preventDefault();
        const texto=buscador.value;
        pintarRecetas(filtrarRecetas(texto));
    })
}

(function(){
    window.onload=()=>{
        iniciar();
    }
})()