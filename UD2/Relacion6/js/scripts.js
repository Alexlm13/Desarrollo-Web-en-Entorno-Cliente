// EJERCICIO3
// a)

function confirmacion() {
  let respuesta = confirm("¿Quieres continuar?");

  if (respuesta) {
    alert("Eligió aceptar");
  } else {
    alert("Eligió cancelar");
  }
}

// b)
let ventana;

function creaVentana() {
    ventana = window.open("", "", "height=400, width=500, left=" + screen.width + ", top=0");
};

function comprobarVentana(){
    if (ventana===undefined) {
        alert("Todavía no has abierto ninguna ventana");
    }else if (ventana.closed) {
        alert("Está cerrada");
    }else{
        alert("Está abierta");
    }
};

// c)
function creaVentanaNombre(){
    let titulo=prompt("Escriba un nombre para la ventana.");
    creaVentana();
    ventana.document.write(`<title>${titulo}</title><h1>${titulo}</h1>`);
};

// d)

function cerrarVentana(){
    ventana.close();
}

// e)
let ventanaNueva;
function creaVentanaTamaño() {
    ventanaNueva = window.open("", "", "height=100, width=300, left=0, top=0");
};
function cambiarTamaño(){
    let width = prompt("Introduce el ancho");
    let height = prompt("Introduce el alto");

    ventanaNueva.resizeTo(width, height);

}

// f)
function creaVentanaTamañoNombre(){
    creaVentanaTamaño();
    ventanaNueva.document.write("<h3>Ventana 300x100</h3>");
    document.getElementById("ventanaPadre").innerHTML="Texto escrito desde la ventana hija"
}

// g
function mover(){
    if (ventanaNueva===undefined || ventanaNueva.closed) {
        alert("Primero abre la ventana");
    } else {
        ventanaNueva.moveBy(50,50);
    }
}

// h
function moverPersonalizado(){
    let x=prompt("A donde quieres mover x");
    let y=prompt("A donde quieres mover y");

    ventanaNueva.moveTo(x,y);
}

// i
function bajar() {
  window.scrollBy(0, 10);
}

// j
function bajarPersonalizado() {
    let y=prompt("A donde quieres mover y");
    window.scrollTo(0,y);
}


// EJERCICIO4

// d
function irDireccion(){
    let direccion=prompt("Escribe una dirección completa (por ejemplo: https://www.google.com):");
    location.href=direccion;
}

// f
function recargar(){
    location.reload();
}