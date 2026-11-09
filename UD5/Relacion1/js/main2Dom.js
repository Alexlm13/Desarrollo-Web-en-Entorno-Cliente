const personas=[
        {codigo: 1, dni: "4455544X", Nombre: "Juan López López", edad: 18},
        {codigo: 2, dni: "7778888X", Nombre: "Luis Mateo López", edad: 25},
        {codigo: 3, dni: "6654545M", Nombre: "Pedro Gutierrez López", edad: 41},
        {codigo: 4, dni: "9998897X", Nombre: "María Gutierrez López", edad: 32},
    ];
    
(function(){
    let contenedor = document.getElementById("personas");
    

    personas.forEach(function(persona){
        let card=document.getElementById("persona");
        let nombre = document.createElement("h3");
        let codigo = document.createElement("p");
        let edad = document.createElement("p");
        let dni = document.createElement("p")
        nombre.textContent=persona.Nombre;
        codigo.textContent="Código: "+persona.codigo;
        edad.textContent="Edad: "+persona.edad;
        dni.textContent="DNI: "+persona.dni;
        card.appendChild(nombre);
        card.appendChild(codigo);
        card.appendChild(edad);
        card.appendChild(dni);
        contenedor.appendChild(card);
    });
    
})()