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
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: row;
      gap: 8px;
      margin-top: 56px;
      margin-bottom: 53px;
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
        width: 40px;
        height: 40px;
        background-color: #ffffff;
        opacity: 1;
        border-radius: 0px;
      }

      .swiper-pagination-bullet-active {
        border: 1px solid #020202;
        background: #ffffff;
      }
    `;
    document.head.appendChild(style);
  } else {
    console.error('Swiper element not found');
  }
});
