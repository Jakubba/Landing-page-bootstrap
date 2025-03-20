var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 2.5,
    },
  },
});
