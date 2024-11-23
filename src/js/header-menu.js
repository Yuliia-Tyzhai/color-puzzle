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
