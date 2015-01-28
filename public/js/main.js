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
		var mapOptions={
			zoom: 8,
			center: new google.maps.LatLng()
		}
		var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
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
	INDEX.fnCargarMapa();

	/* Fin Página inicial*/
}