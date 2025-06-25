(() => {
  const refs = {
    body: document.body,
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    links: document.querySelectorAll('[data-mobile-menu-link]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.links.forEach(link => {
    link.addEventListener('click', closeModal);
  });

  function openModal() {
    refs.modal.setAttribute('data-visible', 'open');
    refs.openModalBtn.setAttribute('data-visible', 'close');
    refs.closeModalBtn.setAttribute('data-visible', 'open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    refs.modal.setAttribute('data-visible', 'close');
    refs.openModalBtn.setAttribute('data-visible', 'open');
    refs.closeModalBtn.setAttribute('data-visible', 'close');
    document.body.style.overflow = '';
  }
})();
