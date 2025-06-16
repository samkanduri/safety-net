const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // Pagination settings
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation buttons
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.querySelectorAll(".smooth-scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const finalPosition = Math.min(targetPosition, totalHeight);

      slowSmoothScroll(finalPosition, 1000);
    }
  });
});

function slowSmoothScroll(targetY, speed) {
  let currentY = window.scrollY;

  function scrollStep() {
    if (Math.abs(targetY - currentY) <= speed) {
      window.scrollTo(0, targetY);
      return;
    }

    currentY += targetY > currentY ? speed : -speed;
    window.scrollTo(0, currentY);
    requestAnimationFrame(scrollStep);
  }

  requestAnimationFrame(scrollStep);
}
