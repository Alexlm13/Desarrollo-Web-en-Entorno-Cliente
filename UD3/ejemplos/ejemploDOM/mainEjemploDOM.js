const alumnos=[
    {id: 1, nombre:"Juan", curso:"1DAW"},
    {id: 2, nombre:"Antonio", curso: "2DAW"},
    {id: 3, nombre:"David", curso:"2ASIR"}
]

const fCreaAlumnos = (arAlumnos) => {
    let divPrincipal = document.getElementById('principal');
    arAlumnos.forEach(alumno => {
        divPrincipal.appendChild(fCreaAlumno(alumno));
    });
}

const fCreaAlumno = (alumno) => {
    let divPadre = document.createElement('div');
    let pId = document.createElement('p');
    let pNombre = document.createElement('p');
    let pCurso = document.createElement('p');

    pId.textContent = alumno.id;
    pNombre.textContent = alumno.nombre;
    pCurso.textContent = alumno.curso;

    divPadre.appendChild(pId);
    divPadre.appendChild(pNombre);
    divPadre.appendChild(pCurso);

    return divPadre;

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