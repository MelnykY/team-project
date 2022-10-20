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

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-icecoffe-open]'),
    closeModalBtn: document.querySelector('[data-icecoffe-close]'),
    modal: document.querySelector('[data-icecoffe]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-milk-open]'),
    closeModalBtn: document.querySelector('[data-milk-close]'),
    modal: document.querySelector('[data-milk]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
