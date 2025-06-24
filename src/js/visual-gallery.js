const gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  initialSlide: 1,
  loop: false,
  grabCursor: true,
  centeredSlides: false,
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
});
