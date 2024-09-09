(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtn1: document.querySelector("[data-modal-open1]"), // Доданий інший ідентифікатор
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn1.addEventListener("click", toggleModal); // Додано обробник для другої кнопки
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
