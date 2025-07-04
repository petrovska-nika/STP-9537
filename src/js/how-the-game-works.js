import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiperInstance;

function initSwiper() {
  if (window.innerWidth < 1200 && !swiperInstance) {
    swiperInstance = new Swiper('[data-game-section-swiper]', {
      modules: [Navigation, Pagination],
      slidesPerView: 2,
      spaceBetween: 0,
      loop: false,
      navigation: {
        nextEl: '[data-how-the-game-btn-next]',
        prevEl: '[data-how-the-game-btn-prev]',
      },
    });
  } else if (window.innerWidth >= 1200 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = undefined;
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
