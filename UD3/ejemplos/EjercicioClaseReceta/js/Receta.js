export default class Receta {
  constructor(id, nombre, elaboracion) {
    this.id = id;
    this.nombre = nombre;
    this.elaboracion = elaboracion;
    this.ingredientes = [];
  }

  addIngrediente(ingrediente) {
    if(this.ingredientes.includes(ingrediente)){
        return "Este ingrediente ya ha sido incluido";
    }else{
        this.ingredientes.push(ingrediente);
    }
  }

  removeIngrediente(ingrediente){
    if (this.ingredientes.includes(ingrediente)) {
        let posicion=this.ingredientes.indexOf(ingrediente);
        this.ingredientes.splice(posicion,1);
    }
  }

  show() {
    let textoIngredientes = "";

    for (let i = 0; i < this.ingredientes.length; i++) {
      textoIngredientes += this.ingredientes[i].show() + "<br>";
    }

    return "Id: " +this.id +"<br>Nombre: " +this.nombre +"<br>Ingredientes:<br>" +textoIngredientes +"<br>Elaboración:<br>" +this.elaboracion;
  }
}