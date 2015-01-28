var ANIMATION =(function(){
	var fnFadeIn = function(element){
		var opacity = 0;
		element.style.display = 'block';
		console.log(opacity);
		function fade(){
			opacity = opacity+0.1;
			element.style.opacity = opacity;
			if(element.style.opacity+0.1>1)
				clearInterval(id);
		}

		var id = setInterval(fade, 10);
	}

	var fnFadeOut = function(element){
		
	}

	return{
		fnFadeIn: fnFadeIn
	}
})();

var INDEX = (function(ANIMATION){

	var fnCambiarTamanio = function(){
		var height = window.innerHeight;
		document.getElementById('cabecera').style.height = height+'px';
		document.querySelector('.contenedor-menu').style.height = (height-93)+'px';

	}

	var fnEventos = function(){
		window.onresize = function(){
			var height = window.innerHeight;
			document.getElementById('cabecera').style.height = height+'px';
			document.querySelector('.contenedor-menu').style.height = (height-93)+'px';
		}
	}

	var fnCargarMapa = function(){
		var mapOptions={
			zoom: 16,
			center: new google.maps.LatLng(-12.0895883,-77.0311585),
			scrollwheel: false
		}
		var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
		var marker  = new google.maps.Marker({
			position: mapOptions.center,
			map: map
		});
	}

	var fnCargarMenuPrincipal = function(){

		var menu_principal = document.getElementById('boton-menu'),
			botones = menu_principal.getElementsByTagName('i');
			contenedor_menu = document.querySelector('.contenedor-menu');

		menu_principal.onclick = function(){

			if(menu_principal.getAttribute('activado')==='false'){
				document.querySelector('.cabecera-principal').style.backgroundColor = 'rgb(45, 48, 53)';
				botones[0].style.display = 'none';
				botones[1].style.display = 'block';
				menu_principal.setAttribute('activado', 'true');
				//contenedor_menu.style.display = 'block';
				ANIMATION.fnFadeIn(contenedor_menu);
				document.body.style.overflowY = 'hidden'
			}
			else{
				document.querySelector('.cabecera-principal').style.backgroundColor = 'transparent';
				botones[0].style.display = 'block';
				botones[1].style.display = 'none';
				menu_principal.setAttribute('activado', 'false');
				contenedor_menu.style.display = 'none';
				document.body.style.overflowY = 'auto'	
			}
		}
	}

	return{
		fnCambiarTamanio: fnCambiarTamanio,
		fnEventos: fnEventos,
		fnCargarMapa: fnCargarMapa,
		fnCargarMenuPrincipal: fnCargarMenuPrincipal
	}

})(ANIMATION);

window.onload= function(){
	
	/* Página inicial */

	INDEX.fnEventos();
	INDEX.fnCambiarTamanio();
	INDEX.fnCargarMapa();
	INDEX.fnCargarMenuPrincipal();

	/* Fin Página inicial*/
}