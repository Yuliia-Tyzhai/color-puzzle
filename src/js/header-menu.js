function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 105;
    const sectionTop = section.getBoundingClientRect().top + window.scrollBy;

    window.scrollTo({
      top: sectionTop - offset,
      behavior: 'smooth',
    });
  }
}

const burgerMenu = document.querySelector('.js-burger-menu');
const mobMenu = document.querySelector('.js-mob-menu');
const menuCloseBtn = document.querySelector('.js-close-btn');
const navMobLinks = mobMenu.querySelectorAll('a');

function openMenu() {
  mobMenu.classList.add('is-open');
  mobMenu.classList.remove('hidden');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  //   mobMenu.classList.remove('is-open');
  mobMenu.classList.add('hidden');
  document.body.classList.remove('no-scroll');
  setTimeout(() => {
    mobMenu.classList.remove('is-open', 'is-closing'); // Забираємо класи після завершення анімації
  }, 300);
}

burgerMenu.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

navMobLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Отримує ID без символу '#'
    scrollToSection(targetId);
    closeMenu();
  });
});

// // ================FAQ section
// document.addEventListener('DOMContentLoaded', () => {
//   const accordionButtons = document.querySelectorAll('.faq-question-text');

//   accordionButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const item = button.closest('.faq-item');
//       const answer = item.querySelector('.faq-answer');
//       const isOpen = button.getAttribute('aria-expanded') === 'true';

//       console.log(document.querySelectorAll('.faq-answer'));

//       document.querySelectorAll('.faq-item').forEach(i => {
//         if (i !== item) {
//           i.querySelector('.faq-answer').style.maxHeight = null;
//           i.classList.remove('open');
//           i.querySelector('.faq-question-text').setAttribute(
//             'aria-expanded',
//             'false'
//           );
//         }
//       });

//       if (isOpen) {
//         answer.style.maxHeight = null;
//         button.setAttribute('aria-expanded', 'false');
//         item.classList.remove('open');
//       } else {
//         answer.style.maxHeight = answer.scrollHeight + 'px';
//         button.setAttribute('aria-expanded', 'true');
//         item.classList.add('open');
//       }
//     });
//   });
// });
