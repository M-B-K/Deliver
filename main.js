let bars = document.querySelector(".bars");
let navbar = document.querySelector(".response");
bars.onclick = function () {
  navbar.classList.toggle("active");
  bars.classList.toggle("open");
};
