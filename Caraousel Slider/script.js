var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  loop:true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: -20,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    click(event) {
      swiper.slideTo(this.clickedIndex);
    },
  },
  pagination: {
    el: ".swiper-pagination"
  },
  autoplay:{
    delay:1000,
    disableOnInteraction:false,
    pauseOnMouseEnter: true,
    // autoplayPause(swiper){

    // }
  },
});