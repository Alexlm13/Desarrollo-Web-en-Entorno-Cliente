//PUNTO1
const persona={
    nombre:"Alejandro",
    edad:30,
    mayorEdad:function(){return this.edad>=18?`${this.nombre} es mayor de edad`:`${this.nombre} es menor de edad`}
}
console.log(`Nombre: ${persona.nombre}|Edad:${persona.edad}|${persona.mayorEdad()}`);

//PUNTO2
function Persona(nombre, edad){
    this.nombre=nombre;
    this.edad=edad;
    this.mayorEdad=function(){return this.edad>=18?`${this.nombre} es mayor de edad`:`${this.nombre} es menor de edad`}
}

const p1=new Persona("Manolo",58);
const p2=new Persona("Paquita",16);

console.log(`Nombre: ${p1.nombre}|Edad:${p1.edad}|${p1.mayorEdad()}`);

//PUNTO3
const arrPersonas=[];

arrPersonas.push(p1,p2);

for (const personas of arrPersonas) {
    console.log(`${personas.nombre} - ${personas.edad} años`)
}


//PUNTO4
function promedio(arrPersonas){
    let suma=0;
    for (let i = 0; i < arrPersonas.length; i++) {
        suma+=arrPersonas[i].edad;
    }

    return suma/arrPersonas.length;
}

console.log(`La edad media es: ${promedio(arrPersonas)}`);