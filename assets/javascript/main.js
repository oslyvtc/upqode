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
