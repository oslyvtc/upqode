var skillsAnim = (function(e) {

	function skillsAnimate(e){
		var num
		var start = $("#page4").offset().top - (($("#page5").offset().top - $("#page4").offset().top) / 2);
		if($(window).scrollTop()>start) {
			$('.skills').each(function(index, element) {
				num = $('.skills__graph-number', element).data('graphNumber');
				$('.skills__graph-filling', element).animate({
					width: num + '%'
				}, 3000, 'easeOutBounce' );
				var number=0;
				setInterval(function() {
					if (number != $('.skills__graph-number', element).data('graphNumber') + 1) {
						$('.skills__graph-number', element).text(number+'%')
						number += 1;
					};
				},3000/$('.skills__graph-number', element).data('graphNumber'));
			});
			$(this).off(e); // execute once
		};
	};

	return {
		skillsAnimate: skillsAnimate
	}

})();
