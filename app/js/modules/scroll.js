export default function scroll() {
  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.4;

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let widthTop = Math.round(
        document.body.scrollTop || document.documentElement.scrollTop
      );
      let hash = this.hash || null;
      if (hash == null) return; // Если ссылка никуда не ведет, не выполнять
      let toBlock = document.querySelector(hash).getBoundingClientRect().top;
      let start = null;

      if (hash == '#shop') {
        toBlock += 150;
      }
      if (hash == '#surf') {
        toBlock += 50;
      }
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r =
            toBlock < 0
              ? Math.max(widthTop - progress / speed, widthTop + toBlock)
              : Math.min(widthTop + progress / speed, widthTop + toBlock);

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
}
