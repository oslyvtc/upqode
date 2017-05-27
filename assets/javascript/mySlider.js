function carousel(slider, slideLeft, slideRight, slideNum, radioButton) {

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
	var radioExecute = false;
	var intervalTime = 1000;


	init();

	function init() {
		slider.find('li').last().insertBefore(slider.find('li').first());
		slider.css({
			marginLeft: '-=100%'
		});

		if (slideRight) {
					slideRight.on('click', function(e){
			e.preventDefault();
			next();
		});
		}

		if (slideLeft) {
		slideLeft.on('click', function(e){
			e.preventDefault();
			prev();
		});
		}

		setTimeout(next, slideItem.eq(nextChecked).data('timeout'))

		radioClick();	
	}; 

	function next() {
		if (!execute) {
			execute = true;
			slider.animate({
				marginLeft: "-=100%"
			},1000, function() {
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
			var timer = slideItem.eq(nextChecked).data('timeout')
			setTimeout(next, timer)
		} else {
			setTimeout(next, timer)
			return;
		};
	};

	function prev() {
		if (!execute) {
			execute = true;
			slider.animate({
				marginLeft: "+=100%"
			},1000, function() {
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
};