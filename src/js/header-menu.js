const header = document.querySelector('.js-header');
const headerLinks = document.querySelectorAll('.js-nav-menu a');
const sections = document.querySelectorAll('section');
console.log(sections);

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

// active yeader link

const observerOptions = {
  root: null, // Вікно перегляду
  rootMargin: `-${header.offsetHeight}px 0px 0px 0px`, // Враховує висоту хедера
  threshold: 0.7, // 50% секції у видимій області
};

function highlightActiveSection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const activeId = entry.target.getAttribute('id');
      headerLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href').slice(1) === activeId
        );
      });
    }
  });
}

const observer = new IntersectionObserver(
  highlightActiveSection,
  observerOptions
);

sections.forEach(section => observer.observe(section));
