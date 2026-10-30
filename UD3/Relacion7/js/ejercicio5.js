function Alumno(id, nombre, notaMedia){
    this.id=id;
    this.nombre=nombre;
    this.notaMedia=notaMedia;
    this.getNotaMedia=function(){return this.notaMedia};
    this.setNotaMedia=function(notaMedia){this.notaMedia=notaMedia};
}

function Colegio(nColegio,numAulas,numAlumnos){
    this.nColegio=nColegio;
    this.numAulas=numAulas;
    this.numAlumnos=numAlumnos;
    this.arrAlumnos=[];

    for (let i=0; i<numAlumnos; i++) {
        this.arrAlumnos.push(new Alumno(i, `alumno${i+1}`,5.00))
    }

    this.consultarNotaMedia=function(id){
        let alumno=this.arrAlumnos[id];
        return alumno.getNotaMedia();
    }

    this.modificarNotaMedia = function (id, mediaNueva){
        this.arrAlumnos[id].setNotaMedia(mediaNueva);
    }
}


let colegio1 = new Colegio("colegio1", 2, 3);

colegio1.consultarNotaMedia(0);
colegio1.consultarNotaMedia(1);
colegio1.consultarNotaMedia(2);

colegio1.modificarNotaMedia(1, 8.5);
colegio1.consultarNotaMedia(1);

colegio1.consultarNotaMedia(0);
colegio1.consultarNotaMedia(2);

console.log(colegio1.arrAlumnos);


let colegio2 = new Colegio("colegio2", 5, 10);

colegio2.modificarNotaMedia(9, 10);
colegio2.consultarNotaMedia(9);
colegio1.consultarNotaMedia(1);

console.log(colegio2.arrAlumnos);