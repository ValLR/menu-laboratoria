function desplegable(){
	//llamando a menu oculto
	var Pmenu = document.getElementById("menu-ppal");
	//llamando y fomando array con elementos de clase show
	var subMenu = Array.from(document.getElementsByClassName("show"));

	//creo un escuchador de eventos
	Pmenu.addEventListener("click", function(event){
	//evitar que se salte la página
		event.preventDefault();
	
	//recorro todo el array de clases show
		subMenu.forEach(function(link) {
	//elimino clases hidden
			link.classList.toggle("hidden");
		})
	});
}

desplegable();