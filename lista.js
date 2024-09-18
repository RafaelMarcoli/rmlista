const inputTarefas = document.querySelector(".input-tarefas");
const btnTarefas = document.querySelector(".btn-tarefas");
const tarefas = document.querySelector(".tarefas");

function createList(textoInput) {
  const li = criarLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  clearInput();
  createButton(li);
  salvarTarefas();
}

function criarLi() {
  const li = document.createElement("li");
  return li;
}
function createButton(li) {
  li.innerText += " ";
  const buttonCreate = document.createElement("button");
  buttonCreate.innerText = "Apagar";
  buttonCreate.setAttribute("class", "apagar");
  li.appendChild(buttonCreate);
}

function clearInput() {
  inputTarefas.value = "";
  inputTarefas.focus();
}

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaTarefas.push(tarefaTexto);
  }

  const tarefaJSON = JSON.stringify(listaTarefas);
  localStorage.setItem("tarefas", tarefaJSON);
  console.log(tarefaJSON);
}

function addTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    createList(tarefa);
  }
}

btnTarefas.addEventListener("click", function () {
  if (!inputTarefas.value) return;
  createList(inputTarefas.value);
});

inputTarefas.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefas.value) return;
    createList(inputTarefas.value);
  }
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});
addTarefasSalvas();
