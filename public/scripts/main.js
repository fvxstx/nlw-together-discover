import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

const deleteButtons = document.querySelectorAll(".actions a.delete");
const checkButtons = document.querySelectorAll(".actions a.check");

deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => handleClick(event, false));
});

checkButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick(event, check = true) {
  /* como o click é uma tag a, ele vai pra algum canto na URL, esse comando deixa suave ja que é um button abrindo o modal */
  event.preventDefault();

  const form = document.querySelector(".modal form");

  const roomId = document.querySelector("#room-id").dataset.id;
  const action = check ? "check" : "delete";
  const questionId = event.target.dataset.id;

  form.setAttribute("action", `/question/${roomId}/${questionId}/${action}`);

  modalTitle.innerHTML = check ? "Marcar como lido" : "Excluir";
  modalDescription.innerHTML = check
    ? "Tem certeza que você deseja marcar essa pergunta como lida?"
    : "Tem certeza que você deseja excluir esta pergunta?";
  modalButton.innerHTML = check ? "Sim, marcar" : "Sim, excluir";
  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");

  modal.open();
}
