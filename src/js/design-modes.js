import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiperInstance;

function initSwiper() {
  if (window.innerWidth < 1200 && !swiperInstance) {
    swiperInstance = new Swiper('[data-design-swiper]', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 13,
      loop: true,
      navigation: {
        nextEl: '[data-design-btn-prev]',
        prevEl: '[data-design-btn-prev]',
      },
    });
  } else if (window.innerWidth >= 1200 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = undefined;
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
