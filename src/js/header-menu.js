// Header and navigation links
const header = document.querySelector('.js-header');
const headerLinks = document.querySelectorAll('.js-nav-menu a');
const sections = document.querySelectorAll('section');

// Mobile menu elements
const burgerMenu = document.querySelector('.js-burger-menu');
const mobMenu = document.querySelector('.js-mob-menu');
const menuCloseBtn = document.querySelector('.js-close-btn');
const navMobLinks = mobMenu.querySelectorAll('a');

// Open and close mobile menu
function openMenu() {
  setTimeout(() => {
    mobMenu.classList.add('is-open');
  }, 200);
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  document.body.classList.remove('no-scroll');
  setTimeout(() => {
    mobMenu.classList.remove('is-open', 'is-closing'); // Remove classes after animation
  }, 300);
}

burgerMenu.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

// Scroll to section on link click
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

// Active header link (IntersectionObserver)
const observerOptions = {
  root: null,
  rootMargin: `-${header.offsetHeight}px 0px 0px 0px`,
  threshold: 0.6,
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

// Animation for hero words
const changeWords = document.querySelector('.change-words');
const spans = changeWords.querySelectorAll('span');

let index = 0;

setInterval(() => {
  spans[index].classList.remove('active');
  index = (index + 1) % spans.length;
  spans[index].classList.add('active');
}, 2000);
