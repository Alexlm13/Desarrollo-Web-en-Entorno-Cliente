function Casa(calle, numero, cp){
    this.calle=calle;
    this.numero=numero;
    this.cp=cp;

    this.setNumero=function(numero){this.numero=numero};
    this.setCalle=function(calle){this.calle=calle};
    this.setCodigoPostal=function(cp){this.cp=cp};
    this.getCalle=function(){return this.calle};
    this.getNumero=function(){return this.numero};
    this.getCodigoPostal=function(){return this.cp};
    console.log(`Nueva casa en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.cp}`);
}

let c1=new Casa("Garcia Prieto",85,15706);
let c2=new Casa("Camino Caneiro",29,32004);
let c3=new Casa("San Clemente","s/n",15705);

console.log("El código postal de la casaA es: "+c1.getCodigoPostal());
console.log("La calle de la casaC es: "+c3.getCalle());