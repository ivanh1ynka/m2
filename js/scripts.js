
function burgerMenu() {
  const burger = document.querySelector(".header__burger");
  const navbar = document.querySelector(".header__navbar");
  const b = document.querySelector(".header__burger-bars");
  const x = document.querySelector(".header__burger-x");
  const body = document.body;

  if (!burger || !navbar || !b || !x) {
    console.warn("Не знайдено один або більше елементів");
    return;
  }

  burger.addEventListener("click", () => {
    console.log("Клік по бургеру");

    burger.classList.toggle("active");

    b.classList.toggle("none"); // приховуємо bars
    x.classList.toggle("active"); // показуємо x

    navbar.classList.toggle("active"); // показуємо меню
    body.classList.toggle("lock"); // блокуємо прокрутку
  });
}

document.addEventListener("DOMContentLoaded", burgerMenu);


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
      "./img/img-3.png",
      "./img/img-7.jpg",
      "./img/img-4.png",
      "./img/frame-7.jpg",
    ],
    design: [
      "./img/img-7.jpg",
      "./img/design-2.jpg",
      "./img/img-5.jpg",
      "./img/planning-2.jpg",
    ],
    repair: [
      "./img/img-3.png",
      "./img/repair-2.jpg",
      "./img/houses-3.jpg",
      "./img/frame-5.jpg",
    ],
    planning: [
      "./img/img-4.png",
      "./img/proekt-1.jpg",
      "./img/frame-11.jpg",
      "./img/frame-10.png",
    ],
    houses: [
      "./img/frame-7.jpg",
      "./img/frame-6.jpg",
      "./img/frame-8.jpg",
      "./img/img-5.png",
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
  slidesPerView: 3,
  loop: true,
  freeMode: true,
  speed: 5000,
  allowTouchMove: false,
  autoplay: {
  delay: 0,
  disableOnInteraction: false,
  pauseOnMouseEnter: false,
  },
});

// furniture
const swiperf = new Swiper(".furniture-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  speed: 5000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

  pagination: {
    el: ".furniture-swiper__pagination",
    clickable: true,
  },
  breakpoints: {
    1440: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
  },
});


document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("language-switcher");
  const currentLang = localStorage.getItem("lang") || "en";
  switcher.value = currentLang;
  loadLang(currentLang);

	console.log('EN')


});
