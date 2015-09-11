(function($){
	$.get('mdl2.css').then(initApp);
	function initApp(data) {
		var dirtyList = data.match(/(.+)}/g);
		var cleanList = [];
		for (var i = 0, l = dirtyList.length; i < l; i++) {
			cleanList.push(dirtyList[i].split('::before')[0].slice(1));
		}
		console.log(cleanList)
	}
})(jQuery);