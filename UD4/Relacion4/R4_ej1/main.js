function validarMayuscula(cadena){
    for (const c of cadena) {
        if (c !== c.toLowerCase() && c === c.toUpperCase()) {
            return true
        }       
    }

    return false;
}

function validarCaracteresEspeciales(valor){
    const especiales="!@#$%^&";

    for (const c of valor) {
        if(especiales.includes(c)){
            return true;
        }
    }
    return false;
}

function validarCorreo(valor){
    return valor.includes("@") && valor.includes(".");
}

function validarTarjetaCredito(valor){
    const numero=valor.split(" ").join("").split("-").join("");
    
    if(numero.length!==16){
        return false;
    }

    for (const c of numero) {
        if(c<"0" || c>"9") return false;
    }

    return true;
}

function validarLongitud(valor){
    return valor.length>=8;
}

function validarNumero(valor){
    for (const c of valor) {
        if(c>="0" && c<="9"){
            return true;
        }
    }

    return false;
}

const form=document.forms.formulario

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(
        "Mayúscula: " + validarMayuscula(form.mayus.value) + "\n" +
        "Especiales: " + validarCaracteresEspeciales(form.especial.value) + "\n" +
        "Email: " + validarCorreo(form.email.value) + "\n" +
        "Tarjeta: " + validarTarjetaCredito(form.tarjeta.value) + "\n" +
        "Longitud: " + validarLongitud(form.long.value) + "\n" +
        "Número: " + validarNumero(form.num.value)
    )
})