export default class Ingrediente{
    constructor(nombre, cantidad, unidades){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.unidades=unidades;
    }

    show(){
        return "Ingrediente: "+this.nombre+"<br>Cantidad: "+this.cantidad+"<br>Unidades: "+this.unidades;
    }
}