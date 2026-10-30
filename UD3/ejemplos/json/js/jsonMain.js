import db from "../db.json" with { type: "json" };


function filtraID(arEstudiantes, id){
    return arEstudiantes.filter(estudiante=>estudiante.id>id);
  
}

function filtraNivel(arEstudiantes, nivel){
    return arEstudiantes.filter(estudiante=estudiante.level=nivel);
}

function filtraGenerica(arEstudiantes, filtro){
    return filtrar(filtraID(arEstudiantes,filtro), filtraNivel(arEstudiantes,filtro));
}


/**
 * Recibe un array de estudiantes y genera el html para
 * mostrar todos los estudiantes del documento
 *
 * @param {*} arEstudiantes : array de estudiantes.
 * @returns devolverá un html de todos los estudiantes.
 */

function muestraEstudiantes(arEstudiantes, filtro) {
// let filtrado = arEstudiantes.filter((i) => i.id > id);
//   let estudiante = "";

//   for (let i = 0; i < filtrado.length; i++) {
//     estudiante += muestraEstudiante(filtrado[i]);
//   }

  let strEstudiantes = arEstudiantes
  .filtaGenerica(arEstudiantes,)
  .sort((a,b)=>a.name.localeCompare(b.name))
  .map((estudiante) =>`<tr><td>${estudiante.id}</td><td>${estudiante.name}</td><td>${estudiante.level}</td></tr>`)
  .join("");

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
            ${strEstudiantes}
        </tbody>
    </table>
    `;
}

/**
 *
 * @param {*} obEstudiante
 * @returns devolverá un estudiante.
 */
// function muestraEstudiante(obEstudiante) {
//   return `
//             <tr>
//                 <td>${obEstudiante.id}</td>
//                 <td>${obEstudiante.name}</td>
//                 <td>${obEstudiante.level}</td>
//             </tr>
//     `;
// }

(function () {
  console.log(db);
  console.log(db.students[0]);
  console.log(db.courses);
  document.getElementById("estudiantes").innerHTML = muestraEstudiantes(db.students,2);
})();
