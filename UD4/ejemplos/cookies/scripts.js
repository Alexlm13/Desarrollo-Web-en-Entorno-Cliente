function add(){
    let nombre=document.getElementById("nombre").value;
    let valor=document.getElementById("valor").value;

    document.cookie=`${nombre}=${valor}`;
}

function consultar(){
    alert(document.cookie);
}

function buscar(){
    let nombre=document.getElementById("nombre").value;
    let cookies=document.cookie.split("; ");
    let valor="";

    for (let i = 0; i < cookies.length; i++) {
        let valorCookie=cookies[i].split("=");
        if (valorCookie[0]===nombre) {
            valor=valorCookie[1];
        }
    }


    if(valor===""){
        alert(`La cookie ${nombre} no existe`);
    }else{
        alert(`${nombre}=${valor}`);
    }
}



(function(){
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("consultar").addEventListener("click", consultar);
    document.getElementById("buscar").addEventListener("click", buscar);
})()