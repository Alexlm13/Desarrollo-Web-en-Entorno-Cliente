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
    const numero=valor.split(" ").join("");
    
    if(numero.length!==16){
        return false;
    }

    for (const c of numero) {
        if(c<"0" || c>"9") return false;
    }

    return true;
}