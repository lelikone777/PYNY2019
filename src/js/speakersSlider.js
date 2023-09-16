import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const speakersSlider = new Swiper('.speakers__slider', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'speakers__slider-bullet',
    bulletActiveClass: 'speakers__slider-bullet--active',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.speakers__slider-button--next',
    prevEl: '.speakers__slider-button--prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 42
    }
  }
});



