let bars = document.querySelector(".bars");
let navbar = document.querySelector(".response");
bars.onclick = function () {
  navbar.classList.toggle("active");
  bars.classList.toggle("open");
};

// <!-- Initialize Swiper -->
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
