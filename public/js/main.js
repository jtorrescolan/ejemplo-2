var INDEX = (function(){

	var fnCambiarTamanio = function(){
		var height = window.innerHeight;
		document.getElementById('cabecera').style.height = height+'px';
	}

	var fnEventos = function(){
		window.onresize = function(){
			var height = window.innerHeight;
			document.getElementById('cabecera').style.height = height+'px';
		}
	}

	var fnCargarMapa = function(){

	}

	var fnCargarMenuPrincipal = function(){

	}

	return{
		fnCambiarTamanio: fnCambiarTamanio,
		fnEventos: fnEventos,
		fnCargarMapa: fnCargarMapa,
		fnCargarMenuPrincipal: fnCargarMenuPrincipal
	}

})();

window.onload= function(){
	
	/* Página inicial */

	INDEX.fnEventos();
	INDEX.fnCambiarTamanio();

	/* Fin Página inicial*/
}