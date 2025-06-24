document.querySelectorAll('.faq-arrow').forEach(arrow => {
  arrow.addEventListener('click', e => {
    e.stopPropagation();

    const button = arrow.closest('.faq-question');
    const faqItem = button.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');

    const isOpen = arrow.classList.contains('open');

    document
      .querySelectorAll('.faq-item')
      .forEach(item => item.classList.remove('active'));
    document
      .querySelectorAll('.faq-arrow')
      .forEach(a => a.classList.remove('open'));

    if (!isOpen) {
      faqItem.classList.add('active');
      arrow.classList.add('open');
    }

    setTimeout(updateAccordionOverflow, 300);
  });
});

function updateAccordionOverflow() {
  const accordion = document.querySelector('.faq-accordion');
  if (!accordion) return;

  const contentHeight = accordion.scrollHeight;

  if (contentHeight > 1040) {
    accordion.style.overflowY = 'auto';
  } else {
    accordion.style.overflowY = 'unset';
  }
}

window.addEventListener('DOMContentLoaded', updateAccordionOverflow);
