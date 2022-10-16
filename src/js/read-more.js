(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-read-more-open]'),
    closeModalBtn: document.querySelector('[data-read-more-close]'),
    modal: document.querySelector('[data-read-more]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
