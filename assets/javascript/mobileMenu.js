var mobileMenu = (function() {

	return {
		mobileToggle: mobileToggle
	}

	function mobileToggle() {
		$('.mobile-menu__burger').click(function(){
			$(".search-js").slideUp();
			$("#mobile").slideToggle("slow");
		});

		$('.mobile-menu__search_icon').click(function(){
			$("#mobile").slideUp();
			$(".search-js").slideToggle("slow");
		});
	}

})();


