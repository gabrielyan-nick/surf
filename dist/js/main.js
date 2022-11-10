import HeaderSlider from "./modules/sliders/headerSlider.js";
import SurfSlider from "./modules/sliders/surfSlider.js";
import TravelSlider from "./modules/sliders/travelSlider.js";
import PriceFromDb from "./modules/priceFromDb.js";
import Calc from "./modules/calc.js";
import scroll from "./modules/scroll.js";
import BoardDesrc from "./modules/boardDesrc.js";
import Modal from "./modules/modal.js";
import Form from "./modules/form.js";
import DateBlock from "./modules/dateBlock.js";
import scrollAnimations from "./modules/scrollAnimations.js";

window.addEventListener("DOMContentLoaded", () => {
  const headerSlider = new HeaderSlider({
    slides: ".header__slider-item",
    prev: ".header .slider__arrow-left",
    next: ".header .slider__arrow-right",
    activeClass: "slider-item--active",
    dots: ".slider-dots__item",
    dotsActiveClass: ".slider-dots__item--active",
  });
  headerSlider.render();

  const surfSlider = new SurfSlider({
    sliderField: ".surf__slider-inner",
    slides: ".slider-box",
    slidesInner: ".slider-box__inner",
    prev: ".surf .slider__arrow-left",
    next: ".surf .slider__arrow-right",
    dots: ".slider-map__dots",
    dotsContent: ".slider-dots__content",
    slidesToShow: 4,
    responsive: { 800: 3, 650: 2, 350: 1 },
  });
  surfSlider.render();

  const travelSlider = new TravelSlider({
    slides: ".travel .travel__slider-item",
    prev: ".travel .travel__slider-item .slider__arrow-left",
    next: ".travel .travel__slider-item .slider__arrow-right",
  });
  travelSlider.render();

  const sleepSlider = new TravelSlider({
    slides: ".sleep .travel__slider-item",
    prev: ".sleep .travel__slider-item .slider__arrow-left",
    next: ".sleep .travel__slider-item .slider__arrow-right",
  });
  sleepSlider.render();

  const shopSlider = new TravelSlider({
    slides: ".shop__slider-item",
    prev: ".shop .slider__arrow-left",
    next: ".shop .slider__arrow-right",
    display: "flex",
  });
  shopSlider.render();

  const priceFromDb = new PriceFromDb({
    priceNode:
      ".sleep .travel__slider-info-item:nth-child(4) > .travel__slider-info-subtitle",
  });
  priceFromDb.render();

  const ausCalc = new Calc({
    nightsPlus:
      ".sleep .travel__slider-item:nth-child(1) .travel__slider-info-item:nth-child(2) .sleep__plus",
    nightsMinus:
      ".sleep .travel__slider-item:nth-child(1) .travel__slider-info-item:nth-child(2) .sleep__minus",
    guestsPlus:
      ".sleep .travel__slider-item:nth-child(1) .travel__slider-info-item:nth-child(3) .sleep__plus",
    guestsMinus:
      ".sleep .travel__slider-item:nth-child(1) .travel__slider-info-item:nth-child(3) .sleep__minus",
    nightsNode:
      ".sleep .travel__slider-item:nth-child(1) .travel__slider-info-item:nth-child(2) .travel__slider-info-subtitle",
    guestsNode:
      ".sleep .travel__slider-item:nth-child(1) .travel__slider-info-item:nth-child(3) .travel__slider-info-subtitle",
    sumNode:
      ".sleep .travel__slider-item:nth-child(1) .travel__slider-info-item:nth-child(4) .travel__slider-info-subtitle",
  });
  ausCalc.init();

  const malibuCalc = new Calc({
    nightsPlus:
      ".sleep .travel__slider-item:nth-child(2) .travel__slider-info-item:nth-child(2) .sleep__plus",
    nightsMinus:
      ".sleep .travel__slider-item:nth-child(2) .travel__slider-info-item:nth-child(2) .sleep__minus",
    guestsPlus:
      ".sleep .travel__slider-item:nth-child(2) .travel__slider-info-item:nth-child(3) .sleep__plus",
    guestsMinus:
      ".sleep .travel__slider-item:nth-child(2) .travel__slider-info-item:nth-child(3) .sleep__minus",
    nightsNode:
      ".sleep .travel__slider-item:nth-child(2) .travel__slider-info-item:nth-child(2) .travel__slider-info-subtitle",
    guestsNode:
      ".sleep .travel__slider-item:nth-child(2) .travel__slider-info-item:nth-child(3) .travel__slider-info-subtitle",
    sumNode:
      ".sleep .travel__slider-item:nth-child(2) .travel__slider-info-item:nth-child(4) .travel__slider-info-subtitle",
  });
  malibuCalc.init();

  const philCalc = new Calc({
    nightsPlus:
      ".sleep .travel__slider-item:nth-child(3) .travel__slider-info-item:nth-child(2) .sleep__plus",
    nightsMinus:
      ".sleep .travel__slider-item:nth-child(3) .travel__slider-info-item:nth-child(2) .sleep__minus",
    guestsPlus:
      ".sleep .travel__slider-item:nth-child(3) .travel__slider-info-item:nth-child(3) .sleep__plus",
    guestsMinus:
      ".sleep .travel__slider-item:nth-child(3) .travel__slider-info-item:nth-child(3) .sleep__minus",
    nightsNode:
      ".sleep .travel__slider-item:nth-child(3) .travel__slider-info-item:nth-child(2) .travel__slider-info-subtitle",
    guestsNode:
      ".sleep .travel__slider-item:nth-child(3) .travel__slider-info-item:nth-child(3) .travel__slider-info-subtitle",
    sumNode:
      ".sleep .travel__slider-item:nth-child(3) .travel__slider-info-item:nth-child(4) .travel__slider-info-subtitle",
  });
  philCalc.init();

  const fraCalc = new Calc({
    nightsPlus:
      ".sleep .travel__slider-item:nth-child(4) .travel__slider-info-item:nth-child(2) .sleep__plus",
    nightsMinus:
      ".sleep .travel__slider-item:nth-child(4) .travel__slider-info-item:nth-child(2) .sleep__minus",
    guestsPlus:
      ".sleep .travel__slider-item:nth-child(4) .travel__slider-info-item:nth-child(3) .sleep__plus",
    guestsMinus:
      ".sleep .travel__slider-item:nth-child(4) .travel__slider-info-item:nth-child(3) .sleep__minus",
    nightsNode:
      ".sleep .travel__slider-item:nth-child(4) .travel__slider-info-item:nth-child(2) .travel__slider-info-subtitle",
    guestsNode:
      ".sleep .travel__slider-item:nth-child(4) .travel__slider-info-item:nth-child(3) .travel__slider-info-subtitle",
    sumNode:
      ".sleep .travel__slider-item:nth-child(4) .travel__slider-info-item:nth-child(4) .travel__slider-info-subtitle",
  });
  fraCalc.init();

  const boardDesrc = new BoardDesrc({ triggers: ".shop__plus" });
  boardDesrc.render();

  const modal = new Modal({
    closeBtn: ".popup__close",
    triggers: ".btn",
    modal: ".popup",
    windows: "[data-modal]",
  });
  modal.render();

  const form = new Form();
  form.render();

  const dateBlock = new DateBlock({
    dayBlock: ".header__day",
    monthBlock: ".header__month",
    yearBlock: ".header__year",
  });
  dateBlock.render();

  scroll();

  scrollAnimations();
});
