import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiperEl = document.querySelector('.features-swiper');

  if (swiperEl) {
    const swiper = new Swiper(swiperEl, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.features-swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
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
        background:transparent;
      }

      .swiper-pagination-bullet-active {
        border: 1px solid #020202;
        background-color: #ffffff;
      }

      @media screen and (min-width: 1200px) {
       .features-swiper-pagination { 
       flex-direction: column; 
       position: absolute; 
       top: 50%;
       left: 0; 
       transform: translateX(-50%);
       margin: 288px 0px 213px 48px;
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
