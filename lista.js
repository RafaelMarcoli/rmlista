const inputTarefas = document.querySelector(".input-tarefas");
const btnTarefas = document.querySelector(".btn-tarefas");
const tarefas = document.querySelector(".tarefas");

function createLista(textoInput) {
  const li = criarLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  clearInput();
  createButton(li);
}

function criarLi() {
  const li = document.createElement("li");
  return li;
}
function createButton(li) {
  li.innerText += " ";
  const buttonCreate = document.createElement("button");
  buttonCreate.innerText = "apagar";
  buttonCreate.setAttribute("class", "apagar");
  li.appendChild(buttonCreate);
}

function clearInput() {
  inputTarefas.value = "";
  inputTarefas.focus();
}

btnTarefas.addEventListener("click", function () {
  if (!inputTarefas.value) return;
  createLista(inputTarefas.value);
});

inputTarefas.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefas.value) return;
    createLista(inputTarefas.value);
  }
});
