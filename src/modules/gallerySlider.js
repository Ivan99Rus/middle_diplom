const gallerySlider = () => {
  const slides = document.querySelectorAll('#gallery .slide'),
    slider = document.querySelector('.gallery-slider');
  let currentSlide = 0,
    interval,
    dot;

  const createDots = () => {
    const dots = document.createElement('ul');

    slider.append(dots);
    dots.classList.add('slider-dots');

    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li'),
        dotButton = document.createElement('button');

      dotButton.classList.add('dot');
      dots.append(dot);
      dot.append(dotButton);

      if (i === 0) {
        dot.classList.add('slick-active');
      }
    }
    dot = document.querySelectorAll('.slider-dots li');
  };

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slides, currentSlide, 'active-slide');
    prevSlide(dot, currentSlide, 'slick-active');

    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, 'active-slide');
    nextSlide(dot, currentSlide, 'slick-active');

  };

  const startSlider = (time = 1000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;

    if (!target.matches('.arrow-button-prev, .arrow-button-next, .dot')) {
      return;
    }

    prevSlide(slides, currentSlide, 'active-slide');
    prevSlide(dot, currentSlide, 'slick-active');

    if (target.matches('.arrow-button-prev')) {
      currentSlide--;
    } else if (target.matches('.arrow-button-next')) {
      currentSlide++;
    } else if (target.matches('.dot')) {
      dot.forEach((el, i) => {
        el = el.querySelector('button');
        if (el === target) {
          currentSlide = i;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, 'active-slide');
    nextSlide(dot, currentSlide, 'slick-active');
  });

  slider.addEventListener('mouseover', (e) => {
    if (e.target.matches('.slider-arrow') ||
      e.target.matches('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', (e) => {
    if (e.target.matches('.slider-arrow') ||
      e.target.matches('.dot')) {
      startSlider();
    }
  });

  createDots();
  startSlider(3000);
};

export default gallerySlider;