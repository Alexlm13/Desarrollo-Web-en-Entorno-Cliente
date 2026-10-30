function getDatos(url, analizaResultado) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log("mostrando datos");
        console.log(data);
        analizaResultado(data);
    });
}

function muestraProductos(data){
    // let strContenido="";
    // for (let item of data){
    //     strContenido+=`<div>${item.id} - ${item.title}</div>`;
    // }

    // let data2=data.map(item=>`<div>${item.id} - ${item.title}</div>`);
    // let strSalida=data2.join(" ");
    // console.log("data2",data2);
    // console.log("strSalida", strSalida);
    document.getElementById("main").innerHTML=data.map(item=>`<div>${item.id} - ${item.title}</div>`).join("");
}

function muestraUsuarios(data){
    document.getElementById("usuarios").innerHTML=data.map(item=>`<div>${item.id} - ${item.username}</div>`).join("");
}


(function () {
  console.log("Ejecutando main fetch");
  getDatos("https://fakestoreapi.com/products", muestraProductos);
  getDatos("https://fakestoreapi.com/users",muestraUsuarios)
})();
