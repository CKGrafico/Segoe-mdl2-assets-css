(function($){
	$.get('mdl2.css').then(initApp);
	function initApp(data) {
		var dirtyList = data.match(/(.+)}/g);
		var cleanList = [];
		for (var i = 0, l = dirtyList.length; i < l; i++) {
			var icon = dirtyList[i].split('::before')[0].slice(1);
			cleanList.push(icon);
			$('.icons').append('<li class="icons-item"><div class="icons-icon ' + icon + '"></div><span class="icons-tag">' + icon + '</span></li>');
		}
		
		$('.icons-item').on('click mouseover', function() {
			$('.icons-item').removeClass('icons-item--touched');
			var $this = $(this);
			var $tag = $this.find('.icons-tag');
			var $pos = $this.position();
			var $height = $this.height();
			$this.addClass('icons-item--touched')
			$tag.css({top: $pos.top + $height, left: $pos.left});
		});
	}
})(jQuery);