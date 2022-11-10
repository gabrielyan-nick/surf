export default class Slider {
  constructor({
    slides = null,
    activeClass = "",
    prev = null,
    next = null,
    sliderField = null,
    slidesInner = null,
    slidesToShow = 4,
    dots = null,
    dotsActiveClass = '',
    dotsContent = null,
    display = 'block',
    responsive = {},
  } = {}) {
    this.slides = document.querySelectorAll(slides);
    this.prev = document.querySelectorAll(prev);
    this.next = document.querySelectorAll(next);
    this.slideIndex = 1;
    this.activeClass = activeClass;
    this.sliderField = document.querySelector(sliderField);
    this.slidesInner = document.querySelectorAll(slidesInner);
    this.slidesToShow = slidesToShow;
    this.dots = document.querySelectorAll(dots);
    this.dotsActiveClass = dotsActiveClass;
    this.dotsContent = document.querySelectorAll(dotsContent);
    this.display = display;
    this.slideCollision = 20;
    this.width =
      +window
        .getComputedStyle(document.querySelector("body"))
        .width.replace(/\D/g, "") /
        this.slidesToShow +
      this.slideCollision;
    this.responsive = responsive;
    this.bodyWidth = +window.getComputedStyle(document.querySelector('body')).width.replace(/\D/g, '');
    this.leftToSlideForw = this.slides.length;
    this.leftToSlideBack = 1;
  }
}
