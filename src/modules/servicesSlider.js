const servicesSlider = () => {
  const serviceBlock = document.getElementById('services'),
    sliderWrapper = serviceBlock.querySelector('.wrapper'),
    slider = serviceBlock.querySelector('.services-slider'),
    slides = slider.querySelectorAll('.slide'),
    prev = document.querySelector('.services-slider-arrow__prev'),
    next = document.querySelector('.services-slider-arrow__next');

  const serviceSlider = new ServicesSlider({
    main: sliderWrapper,
    wrap: slider,
    slides: slides,
    next: next,
    prev: prev,
    infinity: true,
    responsive: [{
        breakPoint: 1200,
        slidesToShow: 4
      },
      {
        breakPoint: 991,
        slidesToShow: 3
      },
      {
        breakPoint: 767,
        slidesToShow: 2
      },
      {
        breakPoint: 479,
        slidesToShow: 1
      },
    ]
  });

  serviceSlider.init();
};

class ServicesSlider {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = false,
    slidesToShow = 5,
    slides,
    position = 0,
    responsive = []
  }) {
    this.main = main;
    this.wrap = wrap;
    this.slides = slides;
    this.next = next;
    this.prev = prev;
    this.slidesToShow = slidesToShow;
    this.responsive = responsive;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesToShow),
      maxPosition: this.slides.length - this.slidesToShow
    };
  }

  init() {
    this.addSlidesClass();
    this.addStyle();
    this.controlSlider();

    if (this.responsive) {
      this.responseInit();
    }
  }

  addSlidesClass() {
    this.main.classList.add('services-slider-carousel');
    this.wrap.classList.add('services-slider-carousel__wrap');

    for (const item of this.slides) {
      item.classList.add('services-slider-carousel__slide');
    }
  }

  addStyle() {
    let style = document.getElementById('services-slider-carousel__style');

    if (!style) {
      style = document.createElement('style');
      style.id = 'services-slider-carousel__style';
    }

    style.textContent = `
      .services-slider-carousel {
        padding: 0;
        overflow: hidden !important;
      }
      .services-slider-carousel__wrap {
        display: flex !important;
        align-items: start !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
      }
      .services-slider-carousel__slide {
        flex: 0 0 ${this.options.widthSlide}% !important;
        margin: 0 auto !important;

      }
    `;

    document.head.appendChild(style);
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }

  nextSlider() {
    if (this.options.infinity || this.options.position < this.options.maxPosition) {
      ++this.options.position;
      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow,
      allResponse = this.responsive.map(item => item.breakPoint),
      maxResponse = Math.max(...allResponse),

      checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < maxResponse) {
          for (let i = 0; i < allResponse.length; i++) {
            if (widthWindow < allResponse[i]) {
              this.slidesToShow = this.responsive[i].slidesToShow;
              this.options.widthSlide = Math.floor(100 / this.slidesToShow);
              this.addStyle();
            }
          }
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.options.widthSlide = Math.floor(100 / this.slidesToShow);
          this.addStyle();
        }
      };
    checkResponse();

    window.addEventListener('resize', checkResponse);
  }
}

export default servicesSlider;