const toggleModal = () => {
  let modal;
  modal = document.getElementById("modal");
  if (modal.style.display == "none") {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
  console.log(modal.style);
};
