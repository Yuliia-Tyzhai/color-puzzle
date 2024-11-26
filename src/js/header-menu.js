const header = document.querySelector('.js-header');
const headerLinks = document.querySelectorAll('.js-nav-menu a');
console.log(headerLinks);

const burgerMenu = document.querySelector('.js-burger-menu');
const mobMenu = document.querySelector('.js-mob-menu');
const menuCloseBtn = document.querySelector('.js-close-btn');
const navMobLinks = mobMenu.querySelectorAll('a');

function openMenu() {
  setTimeout(() => {
    mobMenu.classList.add('is-open');
  }, 200);
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  document.body.classList.remove('no-scroll');
  setTimeout(() => {
    mobMenu.classList.remove('is-open', 'is-closing'); // Забираємо класи після завершення анімації
  }, 300);
}

burgerMenu.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

function scrollToSection(link) {
  const targetId = link.getAttribute('href').slice(1);
  const targetSectionTop = document
    .getElementById(targetId)
    .getBoundingClientRect().top;
  const headerHeight = header.offsetHeight;
  const position = targetSectionTop + window.scrollY - headerHeight;

  window.scrollTo({
    top: position,
    behavior: 'smooth',
  });
}

headerLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    scrollToSection(link);
  });
});

navMobLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    scrollToSection(link);
    closeMenu();
  });
});

// animation hero
const changeWords = document.querySelector('.change-words');
const spans = changeWords.querySelectorAll('span');

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

setInterval(() => {
  const activeSpan = changeWords.querySelector('.active');
  activeSpan.style.color = getRandomColor();
  activeSpan.classList.remove('active');

  const nextSpan =
    activeSpan.nextElementSibling || changeWords.querySelector('span');
  nextSpan.classList.add('active');
}, 2000);

// let index = 0;

// setInterval(() => {
//   spans[index].classList.remove('active');
//   index = (index + 1) % spans.length;
//   spans[index].classList.add('active');
// }, 2000);
