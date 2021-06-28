  

  	let errores = document.getElementById("email-check");
	  	equis = document.getElementById("error");
	  	boton = document.getElementById("enviar");
	  	mensaje = document.querySelector("label");
	  	caja = document.getElementById("exito");
	  	form = document.querySelector("form");
	  	cierre = document.getElementById("cerrar");

  	let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  	form.addEventListener("submit", (e) => {

  		e.preventDefault();
  	});

  	errores.addEventListener("input", () => {
  	

  		if(errores.value.length < 1 || errores.value.trim() == "") {

  			errores.style.border = "solid 2px hsl(0, 93%, 68%)";
  			equis.style.display = "block";
  			mensaje.innerHTML = "The field is empty";
  			return false;
  		 }

  		 if(!valid.test(errores.value)) {

  		 	errores.style.border = "solid 2px hsl(0, 93%, 68%)";
  		 	equis.style.display = "block";
  			mensaje.innerHTML = "Please, provide a valid email";
  			return false;
  		 }


  		else {

  			errores.style.border = "solid 2px hsl(0, 36%, 70%)";
  			equis.style.display = "none";
  			mensaje.innerHTML = "";
  			return true;
  		}
  	

  	});


 	errores.addEventListener("keyup", (en) => {

 		if(valid.test(errores.value) && en.keyCode === 13) {

  		 	errores.style.border = "solid 2px hsl(0, 36%, 70%)";
  			equis.style.display = "none";
  			mensaje.innerHTML = "";
  			caja.style.display = "flex";
  		 	return true;

  		 }

 	});

 	 	
 	boton.addEventListener("click", () => {


 		if(valid.test(errores.value)) {


  		 	errores.style.border = "solid 2px hsl(0, 36%, 70%)";
  			equis.style.display = "none";
  			mensaje.innerHTML = "";
  			caja.style.display = "flex";
  		 	return true;
  		 }

  		else if(!valid.test(errores.value)) {

  			errores.style.border = "solid 2px hsl(0, 93%, 68%)";
  		 	equis.style.display = "block";
  			mensaje.innerHTML = "Please, provide a valid email";
  			return false;
  		}

 	});


 	cerrar.addEventListener("click", () => {

 		exito.style.display = "none";

 	});
  	