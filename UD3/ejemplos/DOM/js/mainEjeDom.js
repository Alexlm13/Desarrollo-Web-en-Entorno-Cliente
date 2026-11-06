function showNodosDiv(){
    let nodoPrincipal=document.getElementById("principal");
    let nodoIndividual=document.querySelector("div");

    let htmlColeccionDiv=document.getElementsByTagName('div');
    let nodeListColeccionDiv=document.querySelectorAll("div");

    nodeListColeccionDiv.forEach(element => {
        console.log(element.innerHTML)
    });

    console.log("nodoprincipal", nodoPrincipal.tagName);
}

(function(){
    console.log("ejecuntando main ejemplo dom");
    showNodosDiv();
})()