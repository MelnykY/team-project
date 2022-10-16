

















        //   Ingrediens

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-ingrediens-open]"),
    closeModalBtn: document.querySelector("[data-ingrediens-close]"),
    modal: document.querySelector("[data-ingrediens]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();




        //    franchise

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-franchise-open]"),
    closeModalBtn: document.querySelector("[data-franchise-close]"),
    modal: document.querySelector("[data-franchise]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

