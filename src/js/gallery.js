import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const swiperGallery = new Swiper('.gallery-swiper', {
  navigation: {
    nextEl: '.gallery-swiper-button-prev',
    prevEl: '.gallery-swiper-button-next',
  },

  centeredSlides: true,
  slidesPerView: 1.5,

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
    init() {
      const allSlides = this.slides;
      const initialSlide = allSlides[this.activeIndex];

      // console.log(allSlides, initialSlide);

      initialSlide.style.transform = 'translateY(-56px)';
      initialSlide.style.opacity = '1';
      initialSlide.style.zIndex = '2';
      placeSlides(this.activeIndex, allSlides);
    },

    slideChange() {
      updateSlideStyles(this);
    },
  },
});

function updateSlideStyles(swiper) {
  const allSlides = swiper.slides;
  const activeSlide = allSlides[swiper.activeIndex];

  // Очищаємо стилі для всіх слайдів
  allSlides.forEach(slide => {
    slide.style.transform = 'translateY(0)';
    slide.style.opacity = '0.6';
    slide.style.zIndex = '0';
  });

  // Стиль для активного слайда
  activeSlide.style.transform = 'translateY(-56px)';
  activeSlide.style.opacity = '1';
  activeSlide.style.zIndex = '2';

  // Стиль для наступних слайдів (від індексу 1 і далі)
  for (let i = swiper.activeIndex + 1; i < allSlides.length; i++) {
    const nextSlide = allSlides[i];
    nextSlide.style.transform = 'translateY(56px)';
    nextSlide.style.opacity = '0.6';
    nextSlide.style.zIndex = '1';
  }
}

function placeSlides(slideIn, allSlides) {
  console.log(allSlides);
  console.log(slideIn);
}

// const allSlides = this.slides;
// const activeSlide = allSlides[this.activeIndex];
// const prevSlide = allSlides[this.previousIndex];
// const prevPrevSlide = allSlides[this.activeIndex - 2];
// const nextSlide = allSlides[this.activeIndex + 2];
// const activeIndex = this.activeIndex - 1;
// console.log(allSlides);

// console.log(prevPrevSlide, prevSlide, activeSlide, nextSlide);

// allSlides.forEach(slide => {
//   slide.style.transform = 'translateY(0)';
//   slide.style.opacity = '0.6';
//   slide.style.zIndex = '0';
// });

// const activeSlide = allSlides[activeIndex];
// if (activeSlide) {
//   activeSlide.style.transform = 'translateY(-56px)';
//   activeSlide.style.opacity = '1';
//   activeSlide.style.zIndex = '2';
// }

// Стилі для слайдів навколо активного
// const prevSlide = allSlides[activeIndex - 1];
// const nextSlide = allSlides[activeIndex + 1];
// const prevPrevSlide = allSlides[activeIndex - 2];
// const nextNextSlide = allSlides[activeIndex + 2];

// if (prevSlide) {
//   prevSlide.style.transform = 'translateY(0)';
//   prevSlide.style.opacity = '0.6';
//   prevSlide.style.zIndex = '1';
// }

// if (nextSlide) {
//   nextSlide.style.transform = 'translateY(0)';
//   nextSlide.style.opacity = '0.6';
//   nextSlide.style.zIndex = '1';

//   if (prevPrevSlide) {
//     prevSlide.style.transform = 'translateY(56px)';
//     prevSlide.style.opacity = '0.6';
//     prevSlide.style.zIndex = '1';
//   }

//   if (nextNextSlide) {
//     nextSlide.style.transform = 'translateY(56px)';
//     nextSlide.style.opacity = '0.6';
//     nextSlide.style.zIndex = '1';
//   }
// }
