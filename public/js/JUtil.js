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
						}
					},10)
				})(len);
			}

			return this;
		},
		hide: function(){
			var len = this.length;
			var elemento = this;
			while(len--){
				elemento[len].style.display = 'none';
			}
		}
	}
})(window.JUtil = window.JUtil || {})