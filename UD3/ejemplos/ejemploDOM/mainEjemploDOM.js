const alumnos=[
    {id: 1, nombre:"Juan", curso:"1DAW"},
    {id: 2, nombre:"Antonio", curso: "2DAW"},
    {id: 3, nombre:"David", curso:"2ASIR"}
]

const fCreaAlumnos=(arAlumnos)=>{
    arAlumnos.forEach(alumno => {
        fCreaAlumno(alumno);
    });
}

const fCreaAlumno=(oalumno)=>{
    let nodo=document.getElementById('principal');

    for (const atributo in oalumno) {
        const p=document.createElement('p');    
        p.appendChild(document.createTextNode(`${atributo}: ${oalumno[atributo]}`));
        nodo.appendChild(p);
    }
}

/**
 * crea un párrafo y lo asocia al nodo div principal
 */

const fCreaParrafo=(str)=>{
    let div=document.getElementById('principal');
    let nParrafo=document.createElement('p');
    let texto=document.createTextNode(str);
    nParrafo.appendChild(texto);
    div.appendChild(nParrafo);
}


function asociaElementos(){
    let btnCreaParrafo=document.getElementById("creaparrafo");

    // console.log("btnCreaParrafo", btnCreaParrafo);
    // btnCreaParrafo.onclick=()=> {
    //     alert('hola mundo');
    //     alert('como estas');
    // }

    btnCreaParrafo.addEventListener("click",() => fCreaAlumnos(alumnos));
}


(function(){
    console.log("prueba que funciona");
    asociaElementos();
})()