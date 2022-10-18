(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-ingrediens-open]'),
    closeModalBtn: document.querySelector('[data-ingrediens-close]'),
    modal: document.querySelector('[data-ingrediens]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
