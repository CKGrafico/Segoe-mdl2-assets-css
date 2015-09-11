(function($){
	$.get('mdl2.css').then(initApp);
	function initApp(data) {
		var dirtyList = data.match(/(.+)}/g);
		var cleanList = [];
		for (var i = 0, l = dirtyList.length; i < l; i++) {
			var icon = dirtyList[i].split('::before')[0].slice(1);
			cleanList.push(icon);
			$('.icons').append('<li><div class="' + icon + '"></div><span>' + icon + '</span></li>');
		}
		
	}
})(jQuery);