const mainSlider = () => {
	const mainSlider = document.querySelector('.main-slider'),
		mainSlide = mainSlider.querySelectorAll('.slide');

	let currentSlide = 0,
		interval;

	function fadeIn(el, display) {
		el.style.opacity = 0;
		el.style.display = display || 'block';
		(function fade() {
			var val = parseFloat(el.style.opacity);
			if (!((val += .01) > 1)) {
				el.style.opacity = val;
				requestAnimationFrame(fade);
			}
		})();
	}


	function fadeOut(el) {
		el.style.opacity = 1;
		(function fade1() {
			if ((el.style.opacity -= .01) < 0) {
				el.style.display = 'none';
			} else {
				requestAnimationFrame(fade1);
			}
		})();
	};

	const nextSlide = (slide, index) => {
		if (index === 0) {
			fadeOut(slide[slide.length - 1]);
		} else {
			fadeOut(slide[index - 1]);
		}

		setTimeout(() => fadeIn(slide[index], 'flex'), 2000);
	};

	const autoPlaySlide = () => {
		currentSlide++;
		if (currentSlide >= mainSlide.length) {
			currentSlide = 0;
		}

		nextSlide(mainSlide, currentSlide);
	};

	const startSlide = (time = 3000) => {
		interval = setInterval(autoPlaySlide, time);
		setTimeout(() => {
			clearInterval(interval);
			interval = setInterval(autoPlaySlide, 8000);
		}, 3000);
	};

	startSlide();
};

export default mainSlider;