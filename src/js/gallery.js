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

      // Повертаємо всі слайди в початкове положення
      allSlides.forEach(slide => {
        slide.style.transform = 'translateY(0)';
        slide.style.opacity = '0.6';
        slide.style.zIndex = '0';
      });

      // Для активного слайда: підняти його на 56px
      activeSlide.style.transform = 'translateY(-56px)';
      activeSlide.style.zIndex = '2'; // Підвищуємо на рівень 2 для активації
      activeSlide.style.opacity = '1'; // Повна прозорість для активного слайда

      // Для попереднього слайда: опустити його на 56px
      if (prevSlide) {
        prevSlide.style.transform = 'translateY(56px)';
        prevSlide.style.opacity = '0.6'; // Менше помітний
        prevSlide.style.zIndex = '1'; // Попередній слайд на рівні 1
      }

      // Для наступного слайда: опустити його на 56px
      if (nextSlide) {
        nextSlide.style.transform = 'translateY(56px)';
        nextSlide.style.opacity = '0.6'; // Менше помітний
        nextSlide.style.zIndex = '1'; // Наступний слайд на рівні 1
      }
    },
  },
});
