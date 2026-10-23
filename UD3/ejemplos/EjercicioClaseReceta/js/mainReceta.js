import Receta  from "./Receta.js";
import Ingrediente from "./Ingrediente.js";

(function(){

    console.log("main....")
    const receta=new Receta(1, "Paella", "Se sofríe las verduras, se echa el caldo y por último el arroz");
    const ingre1=new Ingrediente("Tomate",200,"gramos");
    const ingre2=new Ingrediente("Pimiento",50,"gramos");
    const ingre3=new Ingrediente("Arroz",1,"litro");
    const ingre4=new Ingrediente("Caldo",1,"litro");
    const ingre5=new Ingrediente("Caldo",1,"litro");
    receta.addIngrediente(ingre1);
    receta.addIngrediente(ingre2);
    receta.addIngrediente(ingre3);
    receta.addIngrediente(ingre4);

    //receta.removeIngrediente(ingre4);
    
    receta.addIngrediente(ingre5);

    document.getElementById("contenido").innerHTML=receta.show();
})();