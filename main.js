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

// .....................................
let nums = document.querySelectorAll(".box .num");
let section = document.getElementById("Achievements");
let started = false;
console.log(nums, section);

window.onscroll = function () {
  if (this.window.scrollY >= section.offsetTop - 350) {
    if (!started) {
      nums.forEach((num) => StartCount(num));
    }
    started = true;
  }
};

function StartCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

/************************************** Up Button  *******************************************/
let span = document.querySelector(".up");
window.onscroll = function () {
  this.scrollY >= 200
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
