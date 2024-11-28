import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const arrowBackgroundCont = document.querySelector('.js-background');

let previousIndex = 0;

const swiperGallery = new Swiper('.gallery-swiper', {
  navigation: {
    nextEl: '.gallery-button-prev',
    prevEl: '.gallery-button-next',
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
      const initialSlide = this.slides[this.activeIndex];
      initialSlide.style.opacity = '1';
      updateSlideStyles(this);
    },

    slideChange() {
      const currentIndex = this.activeIndex;

      if (currentIndex > previousIndex) {
        arrowBackgroundCont.classList.remove('gallery-background-img-left');
        arrowBackgroundCont.classList.add('gallery-background-img');
      } else if (currentIndex < previousIndex) {
        arrowBackgroundCont.classList.remove('gallery-background-img-right');
        arrowBackgroundCont.classList.add('gallery-background-img');

        if (currentIndex === 0) {
          arrowBackgroundCont.classList.remove('gallery-background-img');
          arrowBackgroundCont.classList.add('gallery-background-img-left');
        }
      }

      updateSlideStyles(this);

      previousIndex = currentIndex;
    },
  },
});

function updateSlideStyles(swiper) {
  const allSlides = swiper.slides;
  const activeIndex = swiper.activeIndex;
  const endOfSlides = allSlides.length - 1;
  // console.log(allSlides, activeIndex, endOfSlides);

  allSlides.forEach(slide => {
    slide.style.transform = 'translateY(0)';
    slide.style.opacity = '0.6';
  });

  const activeSlide = allSlides[activeIndex];
  activeSlide.style.opacity = '1';
  activeSlide.style.transform = 'translateY(0)';

  for (let i = activeIndex - 1, distanceY = 56; i >= 0; i--, distanceY += 56) {
    const prevSlide = allSlides[i];
    prevSlide.style.transform = `translateY(${distanceY}px)`;
  }

  for (
    let i = activeIndex + 1, distanceY = 56;
    i < allSlides.length;
    i++, distanceY += 56
  ) {
    const nextSlide = allSlides[i];
    nextSlide.style.transform = `translateY(${distanceY}px)`;
  }

  if (activeIndex === endOfSlides) {
    arrowBackgroundCont.classList.remove('gallery-background-img');
    arrowBackgroundCont.classList.add('gallery-background-img-right');
  }
}
