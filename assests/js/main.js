var caja = document.getElementById("caja");
var contenedor = document.getElementById("contenedorTareas");


var agregar = document.getElementById("agregar"); //llamando al elemento que realizara la funcion
agregar.addEventListener("click", agregarTareas);


function agregarTareas(){ 

	//creando elementos
	var nuevoDiv = document.createElement("div");
	var nuevoInput = document.createElement("textarea");
	var nuevoBoton = document.createElement("button");

	var textoBoton = document.createTextNode("Guardar");

	//Asignando clases y atributos
	nuevoDiv.setAttribute("id", "cont")
	nuevoInput.setAttribute("id","tareas");
	nuevoBoton.setAttribute("id", "guardar");


	//Asignando los hijos
	caja.appendChild(nuevoDiv);
	nuevoBoton.appendChild(textoBoton);
	nuevoDiv.appendChild(nuevoInput);
	nuevoDiv.appendChild(nuevoBoton);


	//Asignandole el titulo a las tareas
	var guardar = document.getElementById("guardar");

	guardar.addEventListener("click", function(){

		var tareas = document.getElementById("tareas").value;
		document.getElementById("tareas").value = "";	// Limpiando textarea

		if(tareas == null || tareas.length == 0){

			alert("Tienes que ingresar algo");
			}

			else{

			var	nuevoParrafo = document.createElement("p");
			var nuevoParrafoTexto = document.createTextNode(tareas);

			nuevoParrafo.setAttribute("class", "textos");
			nuevoParrafo.appendChild(nuevoParrafoTexto);
			
			/* //SE SUPONE QUE TOMARIA EL PRIMER ELEMENTO DEL ARREGLO Y LO CAMBIA POR EL TEXTO DE LA ETIQUETA A
			var titulo = document.getElementsByClassName("textos")[0].value;
			var valorTitulo.push(titulo);

			document.getElementById("agregar").textContent = titulo;
			*/
			contenedor.appendChild(nuevoParrafo);

			//Creando boton x
			var eliminar = document.createElement("span");
			eliminar.classList.add("fa", "fa-times");	//icono de basurero
			nuevoParrafo.appendChild(eliminar);
			}

			eliminar.addEventListener("click", function(){
			contenedor.removeChild(nuevoParrafo);
			})

		})

};

/* //Intentando ocultar cajita
var contenedor = document.getElementById("cont");
contenedor.addEventListener("blur", function(){
	contenedor.style.display = 'none'
})*/
