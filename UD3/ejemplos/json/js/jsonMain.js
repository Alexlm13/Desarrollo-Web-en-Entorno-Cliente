import db from "../db.json" with {type:"json"};

/**
 * Recibe un array de estudiantes y genera el html para
 * mostrar todos los estudiantes del documento
 * 
 * @param {*} arEstudiantes : array de estudiantes.
 * @returns devolverá un html de todos los estudiantes.
 */

function muestraEstudiantes(arEstudiantes, id){
    let filtrado=arEstudiantes.filter(i=>i.id > id);
    let estudiante="";

    for (let i = 0; i < filtrado.length; i++) {
        estudiante+=muestraEstudiante(filtrado[i]);
        
    }


    return `
    <table border="1">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Nivel</th>
            </tr>
        </thead>
        <tbody>
            ${estudiante}
        </tbody>
    </table>
    `
}


/**
 * 
 * @param {*} obEstudiante 
 * @returns devolverá un estudiante.
 */
function muestraEstudiante(obEstudiante){
    return `
            <tr>
                <td>${obEstudiante.id}</td>
                <td>${obEstudiante.name}</td>
                <td>${obEstudiante.level}</td>
            </tr>
    `;
}

(function(){
    console.log(db);
    console.log(db.students[0]);
    console.log(db.courses);
    document.getElementById("estudiantes").innerHTML=muestraEstudiantes(db.students, 5);
})()