const form=document.forms.formulario;

form.minus.textContent="1 lowercase character";
form.mayus.textContent="1 uppercase character";
form.min.textContent="6 minimum characters";

form.usuario.addEventListener("input", function(){
    const valor=form.usuario.value;
    
    const rMinus=valor.match(new RegExp("[a-z]"));
    const rMayus=valor.match(new RegExp("[A-Z]"));
    const rMin=valor.match(new RegExp("^.{8,}$","s"));

    const minus=document.getElementById("minuscula");
    const mayus=document.getElementById("mayuscula");
    const min=document.getElementById("minimo");

    if (rMinus !== null) {
        form.minus.textContent="";
        minus.style.visibility="hidden";
    }else{
        form.minus.textContent="1 lowercase character";
        minus.style.visibility="";
    }

    if(rMayus!==null){
        form.mayus.textContent="";
        mayus.style.visibility="hidden";
    }else{
        form.mayus.textContent="1 uppercase character";
        mayus.style.visibility="";
    }

    if(rMin!==null){
        form.min.textContent="";
        min.style.visibility="hidden";
    }else{
        form.min.textContent="6 minimum characters";
        min.style.visibility="";
    }
    
    form.boton.disabled=false;
})