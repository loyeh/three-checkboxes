const sliders = Array.from(document.querySelectorAll(".slider"));
const circles = Array.from(document.querySelectorAll(".circle"));

sliders.forEach((slider, index) => {
  slider.addEventListener("click", () => {
    circles[index].classList.toggle("active");
    slider.classList.toggle("active");
    if (
      index == 2 &&
      sliders[0].classList[1] == "active" &&
      sliders[1].classList[1] == "active"
    ) {
      sliders[0].classList.remove("active");
      circles[0].classList.remove("active");
    } else if (
      index == 1 &&
      sliders[0].classList[1] == "active" &&
      sliders[2].classList[1] == "active"
    ) {
      sliders[2].classList.remove("active");
      circles[2].classList.remove("active");
    } else if (
      index == 0 &&
      sliders[2].classList[1] == "active" &&
      sliders[1].classList[1] == "active"
    ) {
      sliders[1].classList.remove("active");
      circles[1].classList.remove("active");
    }
  });
});
