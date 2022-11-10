import Slider from "./slider.js";

export default class TravelSlider extends Slider {
  constructor(slides, prev, next, slideIndex, display) {
    super(slides, prev, next, slideIndex, display);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    this.slides.forEach((item) => {
      item.style.display = "none";
      item.classList.remove("fadeIn");
    });

    this.slides[this.slideIndex - 1].style.display = this.display;
  }

  changeSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  bindTriggers() {
    this.prev.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        this.changeSlides(-1);
        this.slides[this.slideIndex - 1].classList.add("fadeIn");
      });
    });

    this.next.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        this.changeSlides(1);
        this.slides[this.slideIndex - 1].classList.add("fadeIn");
      });
    });
  }

  render() {
    this.bindTriggers();
    this.showSlides(this.slideIndex);
  }
}
