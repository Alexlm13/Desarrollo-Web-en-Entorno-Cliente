import Alumno from "./Alumno.js";
import Clase from "./Clase.js"
(function(){

    let c=new Clase("2DAW");
    let a=new Alumno("Pedro", 27);
    let a2=new Alumno("Jose", 24);

    c.añadirAlumnos(a);
    c.añadirAlumnos(a2);

    c.mostrarContenido();
    
})()