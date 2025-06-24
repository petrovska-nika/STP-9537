// Імпорт стилів
import 'swiper/css';

// Імпорт Swiper класу
import Swiper from 'swiper';

let swiperInstance;

function initSwiper() {
  if (window.innerWidth < 1200 && !swiperInstance) {
    swiperInstance = new Swiper('[data-game-section-swiper]', {
      slidesPerView: 2,
      spaceBetween: 0,
      loop: false,
      // Без стрілок, пагінація не потрібна
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
