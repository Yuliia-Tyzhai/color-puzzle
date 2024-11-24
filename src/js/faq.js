document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.faq-question-text');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      console.log(document.querySelectorAll('.faq-answer'));

      document.querySelectorAll('.faq-item').forEach(i => {
        if (i !== item) {
          i.querySelector('.faq-answer').style.maxHeight = null;
          i.classList.remove('open');
          i.querySelector('.faq-question-text').setAttribute(
            'aria-expanded',
            'false'
          );
        }
      });

      if (isOpen) {
        answer.style.maxHeight = null;
        button.setAttribute('aria-expanded', 'false');
        item.classList.remove('open');
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        button.setAttribute('aria-expanded', 'true');
        item.classList.add('open');
      }
    });
  });
});
