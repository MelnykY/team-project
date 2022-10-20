(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-open-mobile]'),
    closeModalBtn: document.querySelector('[data-buy-close-mobile]'),
    modal: document.querySelector('[data-buy]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
