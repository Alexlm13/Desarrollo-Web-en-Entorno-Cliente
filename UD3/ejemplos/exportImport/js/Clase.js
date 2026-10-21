export default class Clase {
  constructor(nom) {
    this.nom = nom;
    this.alumnos = [];
  }

  añadirAlumnos(alumno) {
    this.alumnos.push(alumno);
  }

  eliminarAlumnos(alumno){
    this.alumnos.findIndex(a=>a.);
  }

  mostrarContenido() {
    this.alumnos.forEach(i => {
          console.log(i);
    });
  }
}
