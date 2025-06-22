const gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 20,
  initialSlide: 1,
  loop: false,
  grabCursor: true,
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
});
