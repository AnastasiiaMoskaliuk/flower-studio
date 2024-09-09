(() => {
    const refs = {
      openModalBtn: document.querySelector("[subscribe-modal-open]"),
      closeModalBtn: document.querySelector("[subscribe-modal-close]"),
      modal: document.querySelector(".modal-subscribe"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
   