import { getData } from "../services/requests.js";

export default class Calc {
  constructor({
    nightsPlus = null,
    nightsMinus = null,
    guestsPlus = null,
    guestsMinus = null,
    nightsNode = null,
    guestsNode = null,
    sumNode = null,
  } = {}) {
    this.nightsPlus = document.querySelector(nightsPlus);
    this.nightsMinus = document.querySelector(nightsMinus);
    this.guestsPlus = document.querySelector(guestsPlus);
    this.guestsMinus = document.querySelector(guestsMinus);
    this.nightsNode = document.querySelector(nightsNode);
    this.guestsNode = document.querySelector(guestsNode);
    this.sumNode = document.querySelector(sumNode);
    this.nightsIndex = 1;
    this.guestsIndex = 1;
  }

  getRes() {
    let price;
    let sum;
    getData("http://localhost:3000/resorts").then((data) => {
      data.forEach((item) => {
        if (item.name == this.sumNode.getAttribute("data-name")) {
          price = +item.price.replace(/\D/g, "");
          sum = price * this.nightsIndex * this.guestsIndex;
          this.sumNode.textContent = `$${sum}`;
        }
      });
    });
  }

  triggers() {
    this.nightsPlus.addEventListener("click", () => {
      this.nightsIndex++;
      this.render();
      this.getRes();
    });

    this.nightsMinus.addEventListener("click", () => {
      if (this.nightsIndex === 1) {
        this.nightsIndex = 1;
      } else {
        this.nightsIndex--;
        this.render();
        this.getRes();
      }
    });

    this.guestsPlus.addEventListener("click", () => {
      this.guestsIndex++;
      this.render();
      this.getRes();
    });

    this.guestsMinus.addEventListener("click", () => {
      if (this.guestsIndex === 1) {
        this.guestsIndex = 1;
      } else {
        this.guestsIndex--;
        this.render();
        this.getRes();
      }
    });
  }

  render() {
    let nightsText = this.nightsIndex > 1 ? "nights" : "night";
    this.nightsNode.innerHTML = `${this.nightsIndex} ${nightsText}`;

    let guestsText = this.guestsIndex > 1 ? "guests" : "guest";
    this.guestsNode.textContent = `${this.guestsIndex} ${guestsText}`;
  }

  init() {
    this.triggers();
  }
}
