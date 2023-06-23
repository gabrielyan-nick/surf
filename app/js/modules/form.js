import { postData } from "../services/requests.js";
import closeModalAndRecoverForm from "./closeModalAndRecoverForm.js";

export default class Form {
  constructor({
    forms = "form",
    inputs = "form input",
    submitBtn = "form button",
  } = {}) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll(inputs);
    this.submitBtn = document.querySelector(submitBtn);
    this.formTitles = document.querySelectorAll(".popup__title");
    this.modalWrapper = document.querySelector(".popup__content");
    this.modal = document.querySelector(".popup");
    this.messageObj = {
      spinner: "img/spinner.gif",
      ok: "img/ok.png",
      fail: "img/fail.png",
      success: "Thanks. Have a nice day",
      failure: "Something went wrong. Try again later",
      wave: "img/wave.svg",
    };
  }

  clearInputs() {
    this.inputs.forEach((item) => {
      item.value = "";
    });
  }

  phoneInput() {
    this.inputs.forEach((item) => {
      if (item.getAttribute("name") == "phone") {
        item.addEventListener("input", () => {
          item.value = item.value.replace(/[^0-9+]/g, "");
        });
      }
    });
  }

  hideForm() {
    this.formTitles.forEach(item => {
      item.classList.add("animate__animated", "animate__zoomOut");
    });
   
    this.inputs.forEach((item) => {
      item.classList.add("animate__animated", "animate__zoomOut");
    });
  }

  disableForm() {
    this.submitBtn.setAttribute("disabled", true);
    this.inputs.forEach((item) => item.setAttribute("disabled", true));
  }

  submitForm() {
    this.forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        let statusImg = document.createElement("img");
        statusImg.setAttribute("src", this.messageObj.spinner);
        statusImg.classList.add("animated", "slideInLeft");
        this.submitBtn.textContent = "";
        this.submitBtn.appendChild(statusImg);

        let statusMessage = document.createElement("div");
        statusMessage.classList.add(
          "status-message",
          "animate__animated",
          "animate__zoomIn"
        );
        statusMessage.textContent = this.messageObj.success;
        let waveImg = document.createElement("img");
        waveImg.setAttribute("src", this.messageObj.wave);
        statusMessage.appendChild(waveImg);

        const formData = new FormData(form);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        postData("https://json-server-abjv.onrender.com/requests-surf", json)
          .then((res) => {
            console.log(res);
            statusImg.setAttribute("src", this.messageObj.ok);
            this.hideForm();
            this.disableForm();
            this.modalWrapper.prepend(statusMessage);
          })
          .catch((e) => {
            console.log(e);
            statusImg.setAttribute("src", this.messageObj.fail);
            this.hideForm();
            this.disableForm();
            this.modalWrapper.prepend(statusMessage);
            statusMessage.textContent = this.messageObj.failure;
          })
          .finally(() => {
            this.clearInputs();
            setTimeout(() => {
              closeModalAndRecoverForm();
            }, 5000);
          });
      });
    });
  }

  render() {
    this.phoneInput();
    this.submitForm();
  }
}
