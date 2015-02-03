(function(JUtil){

	JUtil.get = function(selector){
		if(typeof selector === 'string')
			return new Util(selector);
		else
			console.error('Selector no válido');
	}

	function Util(selector){
		var selector = document.querySelectorAll(selector),
		i = 0;

		this.length = selector.length;

		for(; i<this.length;i++){
			this[i] = selector[i];
		}

		return this;
	}

	Util.prototype = {

		addClass: function(){
			var len = this.length,
				elemento = this,
				className = arguments[0];

			if(typeof className === 'string'){
				while(len--){
					if(elemento[len].className.split(' ').indexOf(className) === -1)
						elemento[len].className += ' '+className;
				}
			}
		},

		removeClass: function(){
			var len = this.length,
				elemento = this,
				className = arguments[0];

			if(typeof className === 'string'){
				while(len--){
					if(elemento[len].className.split(' ').indexOf(className) !== -1)
						elemento[len].className = elemento[len].className.replace(className,'');
					else
						console.error('La clase no existe');
				}
			}
		},

		find: function(selector){

			var len = this.length,
				elemento = this,
				el_array = [];

			while(len--){
				var findit = elemento[len].querySelectorAll(selector),
					len_findit = findit.length;
				for(var i=0;i<len_findit;i++){
					el_array.push(findit[i]);
				}
			}

			var ar_len = el_array.length;
			elemento.length = ar_len;
			for(var j=0;j<ar_len;j++){
				elemento[j] = el_array[j];
			}

			return elemento;
		},

		fadeIn: function(){
			var len = this.length;
			var elemento = this;
			while(len--){
				var opacity = 0;
				elemento[len].style.display = 'block';
				(function(index){
					var id = setInterval(function(){
						opacity = opacity+0.1;
						elemento[index].style.opacity = opacity;
						if(elemento[index].style.opacity+0.1>1)
							clearInterval(id);
					}, 10);
				})(len);
			}
		},

		fadeOut: function(){
			var len = this.length;
			var elemento = this;
			while(len--){
				var opacity = 1;
				(function(index){
					var id = setInterval(function(){
						opacity = opacity - 0.1;
						elemento[index].style.opacity = opacity;
						if(elemento[index].style.opacity-0.1===0){
							clearInterval(id);
							elemento[index].style.display = "none";
						}
					}, 10);
				})(len)
			}
		},

		rotate: function(){
			var len = this.length;
			var elemento = this;
			var elemento_2 = arguments[0];
			while(len--){
				(function(index){
					var x=0;
					var id = setInterval(function(){
						elemento[index].style.webkitTransform = "rotate("+x+'deg)';
						elemento[index].style.msTransform = "rotate("+x+'deg)';
						elemento[index].style.mozTransform = "rotate("+x+'deg)';
						elemento[index].style.transform = "rotate("+x+'deg)';
						x=x+10;
						if(x>360){
							clearInterval(id);
							if(typeof elemento_2 === 'object'){
								elemento[index].style.display = 'none';
								elemento_2[index].style.display = 'block'
							}
						}
					},10)
				})(len);
			}
		},

		hide: function(){
			var len = this.length;
			var elemento = this;
			while(len--){
				elemento[len].style.display = 'none';
			}
		},

		show: function(){
			var len = this.length,
				elemento = this;
			while(len--){
				elemento[len].style.display = 'block';
			}
		}
	}
})(window.JUtil = window.JUtil || {})