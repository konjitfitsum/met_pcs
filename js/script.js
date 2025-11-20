const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const images = document.querySelectorAll(".carousel img");

let index = 0;

function showSlide(i) {
  track.style.transform = `translateX(${-i * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  showSlide(index);
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  showSlide(index);
});

// auto slide every 4 seconds
setInterval(() => {
  index = (index + 1) % images.length;
  showSlide(index);
}, 4000);
