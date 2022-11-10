export default function scrollAnimations() {
  function scrollAnimFadeInRignt(...elements) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__fadeInRight"
            );
            observer.unobserve(entry.target);
          }
        });
      },

      { root: null, rootMargin: "0px 0px -20%", threshold: 1 }
    );

    const arr = document.querySelectorAll(elements);
    arr.forEach((item) => {
      observer.observe(item);
    });
  }

  function scrollAnimFadeInLeft(...elements) {
    const options = { root: null, rootMargin: "0px", threshold: 1 };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.target.classList.contains("slider-item__info")
        ) {
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInRight"
          );
        }
        if (
          entry.isIntersecting &&
          (entry.target.classList.contains("titleAnim") ||
            entry.target.classList.contains("header__aside"))
        ) {
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInLeft"
          );
        }
        if (window.getComputedStyle(entry.target).opacity == 1) {
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const arr = document.querySelectorAll(elements);
    arr.forEach((item) => {
      observer.observe(item);
    });
  }

  function scrollMapAnim(elem) {
    let delay = 300;
    const dotsContent = document.querySelectorAll(".slider-dots__content");
    const dots = document.querySelectorAll(".slider-dots__circle");
    const mapOptions = { root: null, rootMargin: "0px", threshold: 0.7 };
    const mapObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          dots.forEach((item) => {
            setTimeout(() => {
              item.classList.add("animate__animated", "animate__fadeInUp");
            }, delay);
            delay += 150;
          });

          setTimeout(
            () =>
              dotsContent.forEach((item) => {
                item.classList.add("animate__animated", "animate__fadeIn");
              }),
            1600
          );

          observer.unobserve(entry.target);
        }
      });
    }, mapOptions);

    const arr = document.querySelectorAll(elem);
    arr.forEach((item) => {
      mapObserver.observe(item);
    });
  }

  function shopAnim() {
    const shopContent = document.querySelectorAll(".shop__product-photos");
    const options = { root: null, rootMargin: "0px", threshold: 0.7 };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__slideInRight"
          );
          entry.target.style.visibility = 'visible';
          observer.unobserve(entry.target);
        }
      });
    }, options);
    shopContent.forEach((item) => {
      observer.observe(item);
    });
  }

  function scrollAnimFadeInUp(...elements) {
    let delay = 0;
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInUp"
              );
            }, delay);

            delay += 250;

            observer.unobserve(entry.target);
          }
        });
      },

      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    const arr = document.querySelectorAll(elements);
    arr.forEach((item) => {
      observer.observe(item);
    });
  }

  scrollMapAnim(".slider-map");
  scrollAnimFadeInRignt(".surf__subtitle", ".travel__airline");
  scrollAnimFadeInLeft(".header__aside", ".title h3", ".slider-item__info");
  scrollAnimFadeInUp(".travel__slider-info-item");
  shopAnim();
}
