function Telefono(numero){
    this.numero=numero;
    this.llamadas=0;
    this.llamar=function(){this.llamadas++}
}

const tel1=new Telefono(654321987);
const tel2=new Telefono(632154789);

tel1.llamar();
tel2.llamar();
tel1.llamar();
tel2.llamar();
tel2.llamar();
tel2.llamar();

console.log(`Número de llamadas al telefono 1: ${tel1.llamadas}|Número de llamadas al telefono 2: ${tel2.llamadas}`)