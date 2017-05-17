var caja = document.getElementById("caja");

var agregar = document.getElementById("agregar"); //llamando al elemento que realizara la funcion
agregar.addEventListener("click", function (){ // al hacer click...

	//creando elementos
	var nuevoDiv = document.createElement("div");
	var nuevoInput = document.createElement("input");
	var nuevoBoton = document.createElement("button");

	var textoBoton = document.createTextNode("Guardar");

	//Creando boton x
	var eliminar = document.createElement("span");
	eliminar.classList.add("fa", "fa-times");	//icono de basurero

	//Asignando clases y atributos
	nuevoDiv.setAttribute("id", "cont")
	nuevoInput.setAttribute("id","tareas");
	nuevoBoton.setAttribute("id", "guardar");


	//Asignando los hijos
	caja.appendChild(nuevoDiv);
	nuevoBoton.appendChild(textoBoton);
	nuevoDiv.appendChild(nuevoInput);
	nuevoDiv.appendChild(nuevoBoton);
	nuevoDiv.appendChild(eliminar);


	//Asignandole el titulo a las tareas
	
	var guardar = document.getElementById("guardar");
	guardar.addEventListener("click", function(){
		var tareas = document.getElementById("tareas").value;
	

		if(tareas == null || tareas.length == 0){
		alert("Tienes que ingresar algo");
		}else{
		document.getElementById("agregar").textContent = tareas; //Cambiandole el texto del a con el titulo que se asigno
		}
	})

	eliminar.addEventListener("click", function(){
			nuevoDiv.removeChild(tareas);
	})
	
});

/* //Intentando ocultar cajita
var contenedor = document.getElementById("cont");
contenedor.addEventListener("blur", function(){
	contenedor.style.display = 'none'
})*/