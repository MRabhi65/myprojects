const Openmenu = document.querySelector("#menu-open-button");
const closemenu = document.querySelector("#menu-close-button");

Openmenu.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu");
})
closemenu.addEventListener("click", () => Openmenu.click())

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0: {
        slidesPerView: 1
    },
    768:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView: 3
    },
  }
});