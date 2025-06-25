import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

let swiperInstance;

function initSwiper() {
  if (window.innerWidth < 1200 && !swiperInstance) {
    swiperInstance = new Swiper('[data-tips-section-swiper]', {
      modules: [Navigation],
      slidesPerView: 2,
      spaceBetween: 20,
      loop: false,
      navigation: {
        nextEl: '[data-tips-btn-next]',
        prevEl: '[data-tips-btn-prev]',
      },
    });
  } else if (window.innerWidth >= 1200 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = undefined;
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
