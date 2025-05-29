const swiper = new Swiper(".first-swiper", {
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".first-swiper__pagination",
  },

  navigation: {
    nextEl: ".first-swiper__button-next",
    prevEl: ".first-swiper__button-prev",
  },
});

const workSwiper = new Swiper(".work-p__swiper", {
  slidesPerView: 4,
  spaceBetween: 35,
  loop: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".work-p__swiper-pagination",
  },
});
