const gallerySwiper = new Swiper('[data-gallery-swiper]', {
  slidesPerView: 2,
  spaceBetween: 20,
  initialSlide: 1,
  loop: false,
  grabCursor: true,
  centeredSlides: false,
  navigation: {
    nextEl: '[data-gallery-button-next]',
    prevEl: '[data-gallery-button-prev]',
  },
});
