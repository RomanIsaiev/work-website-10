(() => {
  const refs = {
    openModalBtn1: document.querySelector("[data-modal-open-one]"),
    openModalBtn2: document.querySelector("[data-modal-open-two]"),
    openModalBtn3: document.querySelector("[data-modal-open-three]"),
    openModalBtn4: document.querySelector("[data-modal-open-four]"),
    openModalBtn5: document.querySelector("[data-modal-open-five]"),
    openModalBtn6: document.querySelector("[data-modal-open-six]"),
    closeModalBtn1: document.querySelector("[data-modal-close1]"),
    closeModalBtn2: document.querySelector("[data-modal-close2]"),
    closeModalBtn3: document.querySelector("[data-modal-close3]"),
    closeModalBtn4: document.querySelector("[data-modal-close4]"),
    closeModalBtn5: document.querySelector("[data-modal-close5]"),
    closeModalBtn6: document.querySelector("[data-modal-close6]"),
    modal1: document.querySelector("[data-modal1]"),
    modal2: document.querySelector("[data-modal2]"),
    modal3: document.querySelector("[data-modal3]"),
    modal4: document.querySelector("[data-modal4]"),
    modal5: document.querySelector("[data-modal5]"),
    modal6: document.querySelector("[data-modal6]"),
  };

  refs.openModalBtn1.addEventListener("click", toggleModal1);
  refs.openModalBtn2.addEventListener("click", toggleModal2);
  refs.openModalBtn3.addEventListener("click", toggleModal3);
  refs.openModalBtn4.addEventListener("click", toggleModal4);
  refs.openModalBtn5.addEventListener("click", toggleModal5);
  refs.openModalBtn6.addEventListener("click", toggleModal6);

  refs.closeModalBtn1.addEventListener("click", toggleModal1);
  refs.closeModalBtn2.addEventListener("click", toggleModal2);
  refs.closeModalBtn3.addEventListener("click", toggleModal3);
  refs.closeModalBtn4.addEventListener("click", toggleModal4);
  refs.closeModalBtn5.addEventListener("click", toggleModal5);
  refs.closeModalBtn6.addEventListener("click", toggleModal6);

  function toggleModal1() {
    refs.modal1.classList.toggle("is-hidden");
  }

  function toggleModal2() {
    refs.modal2.classList.toggle("is-hidden");
  }

  function toggleModal3() {
    refs.modal3.classList.toggle("is-hidden");
  }

  function toggleModal4() {
    refs.modal4.classList.toggle("is-hidden");
  }

  function toggleModal5() {
    refs.modal5.classList.toggle("is-hidden");
  }

  function toggleModal6() {
    refs.modal6.classList.toggle("is-hidden");
  }
})();
