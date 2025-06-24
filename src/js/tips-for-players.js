import 'swiper/css';

import Swiper from 'swiper';

let swiperInstance;

function initSwiper() {
  if (window.innerWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper('.tips-for-players-swiper', {
      slidesPerView: 2,
      spaceBetween: 13,
      loop: false,
      pagination: false,
      navigation: false,
    });
  } else if (window.innerWidth >= 1200 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = undefined;
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
