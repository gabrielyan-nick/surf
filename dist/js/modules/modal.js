import closeModalAndRecoverForm from "./closeModalAndRecoverForm.js";

export default class Modal {
  constructor({
    triggers = null,
    closeBtn = null,
    modal = null,
    windows = null,
  } = {}) {
    this.triggers = document.querySelectorAll(triggers);
    this.closeBtn = document.querySelector(closeBtn);
    this.modal = document.querySelector(modal);
    this.windows = document.querySelectorAll(windows);
    this.vertScroll = this.calcScroll();
  }

  openTrigger() {
    this.triggers.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        // Игнорируем триггер в футере
        if (item.classList.contains("foo")) {
          return;
        } else {
          this.windows.forEach((window) => {
            window.style.display = "none";
            window.classList.add("fadeIn2");
          });
          this.modal.style.display = "block";
          document.body.style.overflow = "hidden";
          document.body.style.marginRight = `${this.vertScroll}px`;
        }
      });
    });
  }

  calcScroll() {
    const div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.append(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  closeTrigger() {
    this.closeBtn.addEventListener("click", () => closeModalAndRecoverForm());
    this.modal.addEventListener("click", (e) => {
      if (e.target == this.modal) {
        closeModalAndRecoverForm();
      }
    });
  }

  render() {
    this.openTrigger();
    this.closeTrigger();
  }
}
