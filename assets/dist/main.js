$(function(){

	navigation.navigateOnClick();
	navigation.navigateOnScroll();
	mobileMenu.mobileToggle();

	$(window).on('scroll', function(e) {
		skillsAnim.skillsAnimate(e);
	});

	$(window).on('scroll', function() {
    navigation.navigateOnScroll();
  });

	carousel($('.header-slider__list'), $('.header-slider__left-arrow'), 
	      	 $('.header-slider__right-arrow'),  $('.header-slider__item'), 
	      	 $('input[name="header__radio"]'));

	carousel($('.our-products__list'), 0, 0, $('.our-products__item'), 
	      	 $('input[name="our-products"]'));

});
;var mobileMenu = (function() {

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


;function carousel(slider, slideLeft, slideRight, slideNum, radioButton) {

	var slider = slider;
	var slideLeft = slideLeft;
	var slideRight = slideRight;
	var slideItem = slideNum;
	var slideNum = slideNum.length;
	var radioButton = radioButton;
	var currentSlide = 0;

	var lastCheckedPos = 0; // Return previous checked object  
	var numberOfSlides = 0; // Number of slides to slide
	var nextChecked = 0; // Radio button to be checked
	var execute = false; // To prevent multiple click on arrows
	var setTime;


	init();

	function init() {
		slider.find('li').last().insertBefore(slider.find('li').first());
		slider.css({
			marginLeft: '-=100%'
		});

		if (slideRight) {
			slideRight.on('click', function(e){
				e.preventDefault();
				clearTimeout(setTime);
				next();
			});
		};

		if (slideLeft) {
			slideLeft.on('click', function(e){
				e.preventDefault();
				clearTimeout(setTime);
				prev();
			});
		};

		setTime = setTimeout(next, slideItem.eq(nextChecked).data('timeout'))

		radioClick();	
	}; 

	function next() {
		// debugger;
		if (!execute) {
			execute = true;
			slider.animate({
				marginLeft: "-=100%"
			},900, function() {
				slider.find('li').last().after(slider.find('li').first());
				slider.css({
					marginLeft: '+=100%'
				});
				execute = false;
			});

			if (nextChecked < slideNum - 1) {
				nextChecked++;
			} else {
				nextChecked = 0
			};
			radioButton.eq(nextChecked).prop("checked", true);
			lastCheckedPos = nextChecked;
		};
		timer = slideItem.eq(nextChecked).data('timeout')		
		setTime = setTimeout(next, timer)	
	};

	function prev() {
		if (!execute) {
			execute = true;
			slider.animate({
				marginLeft: "+=100%"
			},900, function() {
				slider.find('li').last().insertBefore(slider.find('li').first());
				slider.css({
					marginLeft: '-=100%'
				});
				execute = false;
			});

			if (nextChecked > 0) {
				nextChecked--;
			} else {
				nextChecked = slideNum - 1
			};
			radioButton.eq(nextChecked).prop("checked", true);
			lastCheckedPos = nextChecked;
		};
		timer = slideItem.eq(nextChecked).data('timeout')		
		setTime = setTimeout(next, timer)	
	};

	function radioClick() {
		radioButton.each(function(index, element) {
			$(element).click(function(){
				nextChecked = index;
				if(index > lastCheckedPos) {
					numberOfSlides = index - lastCheckedPos;
					for(var i = 0; i < numberOfSlides; i++) { 
						slider.animate({
							marginLeft: '-=100%'
						},100, function() {
							slider.find('li').last().after(slider.find('li').first());
							$(this).css({
								marginLeft: '+=100%'
							})
						});
					};
				} else {
					numberOfSlides = lastCheckedPos - index
					for(var i = 0; i < numberOfSlides; i++) {
						slider.animate({
							marginLeft: '+=100%'
						},100, function() {
							slider.find('li').last().insertBefore(slider.find('li').first());
							$(this).css({
								marginLeft: '-=100%'
							})
						});
					};
				};
				lastCheckedPos = index;
			});
		});
	};
};;var navigation = (function() {

  return {
    navigateOnClick: navigateOnClick,
    navigateOnScroll: navigateOnScroll
  }

  function navigateOnClick() {
    $('.home-js').on('click', function() {
      $("#mobile").slideUp();
      $('html,body').animate({
        scrollTop: $("#page1").offset().top 
      }, 1000);
      return false;
    });
  
    $('.whyUs-js').on('click', function() {
      $("#mobile").slideUp();
      $('html,body').animate({
        scrollTop: $("#page2").offset().top - 70
      }, 1000);
      return false;
    });
  
    $('.products-js').on('click', function() {
      $("#mobile").slideUp();
      $('html,body').animate({
        scrollTop: $("#page3").offset().top - 70
      }, 1000);
      return false;
    });
  
    $('.about-js').on('click', function() {
      $("#mobile").slideUp();
      $('html,body').animate({
        scrollTop: $("#page4").offset().top - 70
      }, 1000);
      return false;
    });
  
    $('.contact-js').on('click', function() {
      $("#mobile").slideUp();
      $('html,body').animate({
        scrollTop: $("#page5").offset().top - 70
      }, 1000);
      return false;
    });
  
  };
  
  
  function navigateOnScroll() {
    var page1Top = 0;
    var page2Top = $("#page2").offset().top - (($("#page3").offset().top - $("#page2").offset().top) / 2);
    var page3Top = $("#page3").offset().top - (($("#page4").offset().top - $("#page3").offset().top) / 2);
    var page4Top = $("#page4").offset().top - (($("#page5").offset().top - $("#page4").offset().top) / 2);
    var page5Top = $("#page5").offset().top - (($(document).height() - $("#page5").offset().top) / 2);

    $(".menu__item a").removeClass("active"); 

    if ($(document).scrollTop() >= page1Top && $(document).scrollTop() < page2Top) {
      $(".home-js").addClass("active");
    } else if ($(document).scrollTop() >= page2Top && $(document).scrollTop() < page3Top) {
      $(".whyUs-js").addClass("active");
    } else if ($(document).scrollTop() >= page3Top && $(document).scrollTop() < page4Top) {
      $(".products-js").addClass("active");
    } else if ($(document).scrollTop() >= page4Top && $(document).scrollTop() < page5Top) {
      $(".about-js").addClass("active");
    } else if ($(document).scrollTop() >= page5Top) {
      $(".contact-js").addClass("active");
    };
  };

})();;var skillsAnim = (function(e) {

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
	};

})();
