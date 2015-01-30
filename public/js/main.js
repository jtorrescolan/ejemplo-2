
var INDEX = (function(){

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
		window.onscroll = function(event){
			console.log(event);
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
				contenedor_menu.parentNode.style.paddingRight = '47px';
				menu_principal.setAttribute('activado', 'true');
				JUtil.get('.contenedor-menu').fadeIn();
				document.body.style.overflowY = 'hidden'
			}
			else{
				document.querySelector('.cabecera-principal').style.backgroundColor = 'transparent';
				botones[0].style.display = 'block';
				botones[1].style.display = 'none';
				contenedor_menu.parentNode.style.paddingRight = '30px';
				menu_principal.setAttribute('activado', 'false');
				JUtil.get('.contenedor-menu').fadeOut();
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

})();

window.onload= function(){
	
	/* Página inicial */

	INDEX.fnEventos();
	INDEX.fnCambiarTamanio();
	INDEX.fnCargarMapa();
	INDEX.fnCargarMenuPrincipal();

	/* Fin Página inicial*/
}