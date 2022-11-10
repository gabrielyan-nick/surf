import Slider from "./slider.js";

export default class SurfSlider extends Slider {
  constructor(
    sliderField,
    slidesInner,
    slides,
    prev,
    next,
    dots,
    dotsContent,
    slideIndex,
    slideCollision,
    width,
    slidesToShow,
    responsive,
    body,
    bodyWidth,
    leftToSlideForw,
    leftToSlideBack
  ) {
    super(
      sliderField,
      slidesInner,
      slides,
      prev,
      next,
      dots,
      dotsContent,
      slideIndex,
      slideCollision,
      width,
      slidesToShow,
      responsive,
      body,
      bodyWidth,
      leftToSlideForw,
      leftToSlideBack
    );
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    if (this.slidesToShow == 4) {
      if (n >= this.slidesToShow + 1 && this.slideIndex <= this.slidesToShow) {
        this.sliderField.style.transform = `translateX(-${
          this.width * this.slidesToShow -
          this.slideCollision * (this.slidesToShow - 1)
        }px)`;
      }

      if (this.slideIndex >= this.slidesToShow + 1 && n <= this.slidesToShow) {
        this.sliderField.style.transform = `translateX(0px)`;
      }
    }

    this.slideIndex = n;

    this.slidesInner.forEach((item) => {
      item.style.background = "rgba(28,33,33,0.85)";
      item.querySelector(".slider-box__btn").style.display = "none";
    });

    this.slides[n - 1].querySelector(".slider-box__inner").style.background =
      "none";
    this.slides[n - 1].querySelector(".slider-box__btn").style.display =
      "block";

    this.dotsContent.forEach((item) => {
      item.style.display = "none";
    });

    this.dots.forEach((dot) => {
      if (dot.getAttribute("data-slide") == n) {
        dot.querySelector(".slider-dots__content").style.display = "block";
      }
    });
  }

  changeSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  nextFrame() {
    this.sliderField.style.transform = `translateX(-${
      Math.floor(+this.sliderField.style.transform.replace(/[^\d\.]/g, "")) +
      (this.width * this.slidesToShow -
        this.slideCollision * (this.slidesToShow - 1))
    }px)`;
  }

  nextFramePart() {
    this.sliderField.style.transform = `translateX(-${
      Math.floor(+this.sliderField.style.transform.replace(/[^\d\.]/g, "")) +
      (this.width * this.leftToSlideForw -
        this.slideCollision * this.slidesToShow)
    }px)`;
  }

  prevFrame() {
    this.sliderField.style.transform = `translateX(-${
      Math.floor(+this.sliderField.style.transform.replace(/[^\d\.]/g, "")) -
      (this.width * this.slidesToShow - this.slideCollision * this.slidesToShow)
    }px)`;
  }

  prevFramePart() {
    this.sliderField.style.transform = `translateX(-${
      Math.floor(+this.sliderField.style.transform.replace(/[^\d\.]/g, "")) -
      (this.width * this.leftToSlideForw -
        this.slideCollision * this.slidesToShow)
    }px)`;
  }

  bindTriggers() {
    this.next.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        if (this.leftToSlideForw > 0) {
          this.leftToSlideForw--;
        }
        if (this.leftToSlideBack < this.slides.length) {
          this.leftToSlideBack++;
        }
        if (this.slideIndex < this.slides.length) {
          this.changeSlides(1);
        }

        for (let i = 1; i <= this.slides.length; i++) {
          if (this.slideIndex == this.slidesToShow * i + 1) {
            if (this.leftToSlideForw >= this.slidesToShow) {
              this.nextFrame();
              break;
            } else {
              this.nextFramePart();
              break;
            }
          }
        }
        this.arrows();
      });
    });

    this.prev.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        if (this.leftToSlideBack > 0) {
          this.leftToSlideBack--;
        }
        if (this.leftToSlideForw < this.slides.length) {
          this.leftToSlideForw++;
        }
        if (this.slideIndex > 1) {
          this.changeSlides(-1);
        }

        for (let i = 1; i <= this.slides.length; i++) {
          if (this.slideIndex == this.slidesToShow * i) {
            if (this.leftToSlideBack >= this.slidesToShow) {
              this.prevFrame();
            } else {
              this.prevFramePart();
            }
          }
          if (this.slideIndex == this.slidesToShow) {
            this.sliderField.style.transform = "none";
          }
        }

        this.arrows();
      });
    });

    this.slides.forEach((item, i) => {
      item.addEventListener("click", () => {
        this.showSlides(i + 1);
        this.arrows();
      });
    });
  }

  arrows() {
    if (this.slideIndex == 8) {
      this.next.forEach((item) => {
        item.style.display = "none";
      });
    } else {
      this.next.forEach((item) => {
        item.style.display = "block";
      });
    }

    if (this.slideIndex == 1) {
      this.prev.forEach((item) => {
        item.style.display = "none";
      });
    } else {
      this.prev.forEach((item) => {
        item.style.display = "block";
      });
    }
  }

  dotsInit() {
    this.dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        this.showSlides(+dot.getAttribute("data-slide"));
        this.arrows();
      });
    });
  }

  responsiveInit() {
    if (Object.keys(this.responsive).length > 0) {
      for (let key in this.responsive) {
        if (this.bodyWidth < +key) {
          this.slidesToShow = this.responsive[key];
          this.width =
            +window
              .getComputedStyle(document.querySelector("body"))
              .width.replace(/\D/g, "") /
              this.slidesToShow +
            this.slideCollision;
          this.slides.forEach((item) => {
            item.removeAttribute("data", "notCol");
            item.style.marginLeft = "0px";
          });
          this.init();
          break;
        }
      }
    }
  }

  init() {
    this.sliderField.style.width = this.width * this.slides.length + "px";
    this.slides.forEach((slide) => {
      slide.style.width = this.width + "px";
    });

    // Считаем колл-во элементов к которым не надо применять marginLeft.
    let notCollisionElem =
      Math.ceil(this.slides.length / this.slidesToShow) - 1;
    this.slides[0].setAttribute("data", "notCol");
    // Добавляем атрибут notCol к элементам находящимя в левом краю экрана.
    for (let i = 1; i <= notCollisionElem; i++) {
      this.slides[this.slidesToShow * i].setAttribute("data", "notCol");
    }

    this.slides.forEach((item, i) => {
      item.style.zIndex = i + 1;
      // Добавляем margiLeft ко всем элементам без атрибута.
      if (!item.getAttribute("data", "notCol")) {
        item.style.marginLeft = "-20px";
      }
    });
  }

  render() {
    this.init();
    this.bindTriggers();
    this.showSlides(this.slideIndex);
    this.arrows();
    this.dotsInit();
    this.responsiveInit();
  }
}
