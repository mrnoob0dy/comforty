const heroSlider = new Swiper('.hero-slider', {
  slidesPerView: 1,
  loop: true,
  speed: 2000,
  navigation: {
    nextEl: '.hero__slider-arrow--right',
    prevEl: '.hero__slider-arrow--left',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  // autoplay: {
  //   delay: 3000,
  // },
});

const recentlySwiper = new Swiper('.recently__cards', {
  // slidesPerView: 4,
  loop: true,
  // spaceBetween: 24,
  navigation: {
    nextEl: '.recently-slider-arrow__right',
    prevEl: '.recently-slider-arrow__left',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});

const categoriesSwiper = new Swiper('.categories__list', {
  // slidesPerView: 3,
  loop: true,
  // spaceBetween: 24,
  navigation: {
    nextEl: '.categories-slider-arrow__right',
    prevEl: '.categories-slider-arrow__left',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

const feedbackSwiper = new Swiper('.feedback__cards', {
  // slidesPerView: 2,
  loop: true,
  // spaceBetween: 24,
  navigation: {
    nextEl: '.feedback-slider-arrow__right',
    prevEl: '.feedback-slider-arrow__left',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24
    }
  }
});

const featuredSwiper = new Swiper('.card__list', {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: '.featured-slider-arrow__right',
    prevEl: '.featured-slider-arrow__left',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});