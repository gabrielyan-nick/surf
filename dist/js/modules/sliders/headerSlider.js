import Slider from "./slider.js";

export default class HeaderSlider extends Slider {
  constructor(slides, activeClass, prev, next, dots, dotsActiveClass, slideIndex) {
    super(slides, activeClass, prev, next, dots, dotsActiveClass, slideIndex);
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
      item.classList.remove(
        this.activeClass,
        "animate__animated",
        "animate__fadeInRight",
        "animate__fadeInLeft"
      );
    });

    this.dots.forEach((item) => {
      item.classList.remove(this.dotsActiveClass);
    });

    this.slides[this.slideIndex - 1].style.display = "block";

    this.slides[this.slideIndex - 1].classList.add(this.activeClass);
    this.dots[this.slideIndex - 1].classList.add(this.dotsActiveClass);
  }

  changeSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  bindTriggers() {
    this.prev.forEach((item) => {
      item.addEventListener("click", () => {
        this.changeSlides(-1);
        if (this.slideIndex == 4) {
          this.slides[this.slideIndex - 1].classList.add(
            "animate__animated",
            "animate__fadeInRight"
          );
        } else {
          this.slides[this.slideIndex - 1].classList.add(
            "animate__animated",
            "animate__fadeInLeft"
          );
        }
        this.dot();
      });
    });

    this.next.forEach((item) => {
      item.addEventListener("click", () => {
        this.changeSlides(1);
        if (this.slideIndex == 1) {
          this.slides[this.slideIndex - 1].classList.add(
            "animate__animated",
            "animate__fadeInLeft"
          );
        } else {
          this.slides[this.slideIndex - 1].classList.add(
            "animate__animated",
            "animate__fadeInRight"
          );
        }
        this.dot();
      });
    });
  }

  dot() {
    this.dots.forEach((item) => {
      item.style.borderTop = "4px solid #fff";
      if (item.classList.contains(this.dotsActiveClass)) {
        item.style.borderTop = "4px solid #4AF6CD";
      }
    });
  }

  render() {
    this.bindTriggers();
    this.showSlides(this.slideIndex);
    this.dot();
  }
}
