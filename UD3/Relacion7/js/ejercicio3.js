function Punto(x,y){
    this.x=x;
    this.y=y;
}

let p1=new Punto(3,2);
let p2=new Punto(6,5);

function Linea(p1,p2){
    this.p1=p1;
    this.p2=p2;
}

let recta=new Linea(p1, p2);

console.log(`Línea recta formada por los puntos (${recta.p1.x},${recta.p1.y}) y (${recta.p2.x},${recta.p2.y})`);