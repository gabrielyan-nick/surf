export default class BoardDesrc {
  constructor({ triggers = null } = {}) {
    this.triggers = document.querySelectorAll(triggers);
  }
  hideDescr() {
    this.triggers.forEach((trig) => {
      if (trig.nextElementSibling.classList.contains("fadeIn2")) {
        trig.nextElementSibling.style.display = "none";
        trig.nextElementSibling.classList.remove("fadeIn2");
        trig.querySelector("path:nth-child(3)").style.display = "inline";
      }
    });
  }

  render() {
    this.triggers.forEach((item) => {
      item.addEventListener("click", () => {
        if (
          window.getComputedStyle(item.nextElementSibling).display == "none"
        ) {
          this.hideDescr();
          item.nextElementSibling.style.display = "block";
          item.nextElementSibling.classList.add("fadeIn2");
          item.querySelector("path:nth-child(3)").style.display = "none";
        } else {
          this.hideDescr();
        }
      });
    });
  }
}
