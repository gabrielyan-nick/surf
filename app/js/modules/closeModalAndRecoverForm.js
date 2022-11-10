export default function closeModalAndRecoverForm(
    modal = "[data-modal]",
    submitBtn = "form button",
    modalTitles = document.querySelectorAll(".popup__title"),
    inputs = "form input"
  ) {
    document.querySelectorAll(modal).forEach((item) => {
      item.style.display = "none";
      item.classList.remove("fadeIn2");
      document.body.style.overflow = "";
      document.body.style.marginRight = "0px";
    });
  
    document.querySelector(submitBtn).removeAttribute("disabled");
    document.querySelector(submitBtn).textContent = "submit";
    modalTitles.forEach(item => {
      item.classList.remove("animate__animated", "animate__zoomOut");
    });
    // document
    //   .querySelector(modalTitles)
    //   .classList.remove("animate__animated", "animate__zoomOut");
    document.querySelectorAll(inputs).forEach((item) => {
      item.classList.remove("animate__animated", "animate__zoomOut");
      item.removeAttribute("disabled");
    });
    if (document.querySelector(".status-message")) {
      document.querySelector(".status-message").remove();
    }
  }