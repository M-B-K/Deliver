let bars = document.querySelector(".bars");
let navbar = document.querySelector(".response");
bars.onclick = function () {
  navbar.classList.toggle("active");
  bars.classList.toggle("open");
};

// <!-- Initialize Swiper -->
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  speed: 1000,
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});
