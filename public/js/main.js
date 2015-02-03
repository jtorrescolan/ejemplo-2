
var APP = (function(){

	var fnCambiarTamanio = function(){
		var height = window.innerHeight;
		document.getElementById('cabecera').style.height = height+'px';
		document.querySelector('.contenedor-menu').style.height = (height-90)+'px';

	}

	var fnEventos = function(){
		var lastTop = 0;
		window.onresize = function(){
			var height = window.innerHeight,
				elemento = JUtil.get('.cabecera-principal')[0];
			document.getElementById('cabecera').style.height = height+'px';
			document.querySelector('.contenedor-menu').style.height = (height-90)+'px';
		}
		window.onscroll = function(evt){
			
			var evt = evt || window.event,
				scrollTop = evt.target.documentElement.scrollTop || document.body.scrollTop,
				scrollHeight = evt.target.documentElement.scrollHeight || document.body.scrollHeight,
				elemento = JUtil.get('.cabecera-principal');

			if(scrollTop<lastTop){
				elemento.addClass('cabecera-principal-2');
				if(scrollTop === 0){
					elemento.removeClass('cabecera-principal-2');
				}
			}
			else{
				elemento.removeClass('cabecera-principal-2');
			}
			lastTop = scrollTop;
		}
	}

	var fnCargarMapa = function(){
		if(document.getElementById('mapa') !== null){
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
	}

	var fnCargarMenuPrincipal = function(){

		var menu_principal = JUtil.get('#boton-menu'),
			contenedor_menu = JUtil.get('.contenedor-menu');

		menu_principal[0].onclick = function(){

			if(menu_principal[0].getAttribute('activado')==='false'){
				JUtil.get('.cabecera-principal').addClass('cabecera-principal-3');
				JUtil.get('.bar-icon').rotate(JUtil.get('.close-icon'));
				contenedor_menu[0].parentNode.style.paddingRight = '47px';
				menu_principal[0].setAttribute('activado', 'true');
				contenedor_menu.fadeIn();
				document.body.style.overflowY = 'hidden';
			}
			else{
				JUtil.get('.cabecera-principal').removeClass('cabecera-principal-3');
				contenedor_menu[0].parentNode.style.paddingRight = '30px';
				menu_principal[0].setAttribute('activado', 'false');
				JUtil.get('.close-icon').hide();
				JUtil.get('.bar-icon').show();
				contenedor_menu.fadeOut();
				document.body.style.overflowY = 'auto';	
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

	APP.fnEventos();
	APP.fnCambiarTamanio();
	APP.fnCargarMapa();
	APP.fnCargarMenuPrincipal();

	/* Fin Página inicial*/
}