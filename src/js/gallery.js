import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const swiperGallery = new Swiper('.gallery-swiper', {
  //   direction: 'horizontal',
  //   loap: true,
  //   slidesPerView: '3',
  //   spaceBetween: 36,

  navigation: {
    nextEl: '.gallery-swiper-button-next',
    prevEl: '.gallery-swiper-button-prev',
  },

  centeredSlides: true,

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 36,
    },
  },

  on: {
    slideChange: function () {
      const allSlides = this.slides;
      const activeSlide = allSlides[this.activeIndex];
      const prevSlide = allSlides[this.previousIndex];
      const nextSlide = allSlides[this.activeIndex + 1];

      allSlides.forEach(slide => {
        slide.style.transform = 'translateY(0)';
        slide.style.opacity = '0.6';
        slide.style.zIndex = '0';
      });

      activeSlide.style.transform = 'translateY(-56px)';
      activeSlide.style.zIndex = '2';
      activeSlide.style.opacity = '1';

      if (prevSlide) {
        prevSlide.style.transform = 'translateY(56px)';
        prevSlide.style.opacity = '0.6';
        prevSlide.style.zIndex = '1';
      }

      if (nextSlide) {
        nextSlide.style.transform = 'translateY(56px)';
        nextSlide.style.opacity = '0.6';
        nextSlide.style.zIndex = '1';
      }
    },
  },
});
