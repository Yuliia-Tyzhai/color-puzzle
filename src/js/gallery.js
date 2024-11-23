import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const swiperContainer = document.querySelector('.gallery-swiper-container');
  const nextButton = document.querySelector('.gallery-swiper-button-next');
  const prevButton = document.querySelector('.gallery-swiper-button-prev');

  // Перевіряємо, чи елементи існують
  if (swiperContainer && nextButton && prevButton) {
    console.log('Ініціалізація Swiper...');

    // Додаємо затримку для гарантії, що всі елементи доступні
    setTimeout(() => {
      try {
        const swiperGallery = new Swiper(swiperContainer, {
          direction: 'horizontal',
          autoHeight: true,
          speed: 1000,
          spaceBetween: 48,
          keyboard: { enabled: true, onlyInViewport: false },
          mousewheel: true,
          allowTouchMove: true,
          simulateTouch: true,
          navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
            disabledClass: 'swiper-button-disabled',
          },
          grabCursor: true,
        });

        console.log('Swiper ініціалізовано');
      } catch (error) {
        console.error('Помилка при ініціалізації Swiper:', error);
      }
    }, 500); // Затримка 500 мс
  } else {
    console.error('Один або кілька елементів swiper не знайдено.');
  }
});
