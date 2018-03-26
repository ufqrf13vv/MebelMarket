(function() {
  	$(document).ready(function () {
  		$('#filter, #menu').on('click', function(e) {
			e.preventDefault();

			if ($(this).attr('id') == 'filter') {
				menu($(this), '.filter__aside-wrapper');
			} else {
				menu($(this), '.main-menu__wrapper');
			}
  		});

  		function menu(main, sibling) {
  			var menu = main.siblings(sibling);

  			if (menu.css('display') == 'none') {
				menu.fadeIn();

				return;
			}
			
			menu.fadeOut();
  		}
  	});
})();