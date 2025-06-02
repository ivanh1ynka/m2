
//====== PORTFOLIO JS ======//

document.addEventListener("DOMContentLoaded", () => {
  const filterItems = document.querySelectorAll(".portfolio__item");
  const portfolioBlocks = document.querySelectorAll(".portfolio__block-img");

  filterItems.forEach((item) => {
    item.addEventListener("click", () => {
      const filter = item.getAttribute("data-filter");

      filterItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      portfolioBlocks.forEach((block) => {
        const category = block.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          block.style.display = "block";
        } else {
          block.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const filterItems = document.querySelectorAll(".portfolio__item");
  const imageBlocks = document.querySelectorAll(".portfolio__block-img");

  const portfolioImages = {
    all: [
      "./img/all/all-1.png",
      "./img/all/all-2.png",
      "./img/all/all-3.png",
      "./img/all/all-4.png",
    ],
    design: [
      "./img/design/design-1.jpg",
      "./img/design/design-2.jpg",
      "./img/design/design-3.jpg",
      "./img/design/design-4.jpg",
    ],
    repair: [
      "./img/repair/repair-1.jpg",
      "./img/repair/repair-2.jpg",
      "./img/repair/repair-3.jpg",
      "./img/repair/repair-4.jpg",
    ],
    planning: [
      "./img/planning/planning-1.jpg",
      "./img/planning/planning-2.jpg",
      "./img/planning/planning-3.jpg",
      "./img/planning/planning-4.jpg",
    ],
    houses: [
      "./img/houses/houses-1.jpg",
      "./img/houses/houses-2.jpg",
      "./img/houses/houses-3.jpg",
      "./img/houses/houses-4.jpg",
    ],
  };

  filterItems.forEach((item) => {
    item.addEventListener("click", () => {
      const filter = item.getAttribute("data-filter");
      // Активна кнопка
      filterItems.forEach((btn) => btn.classList.remove("active"));
      item.classList.add("active");

      const images = portfolioImages[filter];

      imageBlocks.forEach((block, index) => {
        const img = block.querySelector("img");

        if (images[index]) {
          img.src = images[index];
          block.style.display = "block";
        } else {
          block.style.display = "none";
        }
      });
    });
  });
});


const swiper = new Swiper(".main-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".main-swiper__pagination",
    clickable: true,
  },
});


// work-p js //

const workSwiper = new Swiper(".work-p__swiper", {
  slidesPerView: 3, // кількість слайдів
  spaceBetween: 80,
  loop: true,
  freeMode: true,
  speed: 5000, // чим більше — тим плавніше
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
});

swiperEl.addEventListener("click", () => {
  workSwiper.autoplay.start();
});




// aside-soc.js

document.addEventListener('DOMContentLoaded', () => {
  const scrollBtn = document.querySelector('.scroll-to-top');

  // Приховуємо кнопку за замовчуванням
  scrollBtn.classList.add('hidden');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove('hidden');
    } else {
      scrollBtn.classList.add('hidden');
    }
  });

  scrollBtn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // плавна прокрутка
    });
  });
});

