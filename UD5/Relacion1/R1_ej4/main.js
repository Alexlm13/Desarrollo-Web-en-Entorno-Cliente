import { arrArticulos } from "./modulos/articulos.mjs";

//Funcion Main
(function Main() {
  console.log("Mostrando artículos");
  console.log(arrArticulos);
  let contenedor = document.getElementById("articulos");

  arrArticulos.forEach((articulo) => {
    console.log(articulo);
    let card = document.createElement("div");
    card.className="card";
    let titulo = document.createElement("h3");
    let valoracion = document.createElement("p");
    let precio = document.createElement("p");
    let categoria = document.createElement("p");
    let descripcion = document.createElement("p");
    let imagen = document.createElement("img");
    titulo.textContent = articulo.title;
    valoracion.textContent = "Valoración: "+articulo.rating.rate;
    precio.textContent = "Precio: "+articulo.price;
    categoria.textContent = "Categoría: "+articulo.category;
    descripcion.textContent = "Descripción: "+articulo.description;
    imagen.src=articulo.image;
    card.appendChild(titulo);
    card.appendChild(valoracion)
    card.appendChild(precio);
    card.appendChild(categoria);
    card.appendChild(descripcion);
    card.appendChild(imagen);
    contenedor.appendChild(card);
  });
})();
