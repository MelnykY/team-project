(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-locations-open]"),
    closeModalBtn: document.querySelector("[data-locations-close]"),
    modal: document.querySelector("[data-locations]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();