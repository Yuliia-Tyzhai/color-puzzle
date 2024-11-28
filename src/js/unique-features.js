import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiperEl = document.querySelector('.features-swiper');

  const slideAnimations = [
    { rotate: 45, scale: 0.78, duration: 0.8 },
    { rotate: -35, scale: 0.74, duration: 1 },
    { rotate: -35, scale: 0.83, duration: 0.7 },
    { rotate: -25, scale: 0.65, duration: 1.2 },
    { rotate: 35, scale: 0.65, duration: 0.9 },
  ];

  if (swiperEl) {
    const swiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.features-swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      allowSlideTransition: false,
      speed: 0,
      on: {
        slideChangeTransitionStart: function () {
          const activeSlide = this.slides[this.activeIndex];

          const animationSettings =
            slideAnimations[this.activeIndex % slideAnimations.length];

          const isNextSlide = this.activeIndex > this.previousIndex;

          const angle = isNextSlide
            ? animationSettings.rotate
            : -animationSettings.rotate;

          const randomDuration = Math.random() * 0.5 + 0.5;
          const duration = animationSettings.duration || randomDuration;

          activeSlide.style.transition = `transform ${duration}s ease-in-out, opacity ${duration}s ease-in-out`;
          activeSlide.style.transform = `rotate(${angle}deg) scale(${animationSettings.scale})`;
          activeSlide.style.opacity = '0';

          setTimeout(() => {
            activeSlide.style.opacity = '1';
          }, 100);
          setTimeout(() => {
            activeSlide.style.transform = '';
            activeSlide.style.opacity = '';
            activeSlide.style.transition = '';
          }, duration * 1000);
        },
      },
    });

    const style = document.createElement('style');
    style.innerHTML = `
      .features-swiper-pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 8px;
        margin-top: 16px;
        margin-bottom: 16px;
        position: relative;
      }

      .swiper-pagination-bullet {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.6;
        color: #020202;
        padding: 10px;
        opacity: 1;
        border-radius: 0px;
        background: transparent;
      }

      .swiper-pagination-bullet-active {
        border: 1px solid #020202;
        background-color: #ffffff;
      }

      .swiper-slide {
        opacity: 1;
        transform: rotate(0) scale(1);
        transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
      }

      @media screen and (min-width: 1200px) {
        .features-swiper-pagination { 
          flex-direction: column; 
          position: absolute; 
          top: 50%;
          left: 0; 
          transform: translateX(-50%);
          margin: 288px 0px 213px 40px;
        }
        .swiper-pagination-bullet {
          width: 80px;
          height: 80px;
        }
      }
    `;
    document.head.appendChild(style);
  } else {
    console.error('Swiper element not found');
  }
});
