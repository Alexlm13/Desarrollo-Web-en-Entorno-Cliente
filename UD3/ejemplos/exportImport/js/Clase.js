export default class Clase {
  constructor(nom) {
    this.nom = nom;
    this.alumnos = [];
  }

  añadirAlumnos(alumno) {
    this.alumnos.push(alumno);
  }

  eliminarAlumnos(alumno){
    let indice=this.alumnos.findIndex(a=>a===alumno);
    if(indice!==-1){
      this.alumnos.splice(indice,1)
    }
  }

  mostrarContenido() {
    this.alumnos.forEach(i => {
          console.log(i);
    });
  }
}
