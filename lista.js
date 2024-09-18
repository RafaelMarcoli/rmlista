const inputTarefas = document.querySelector(".input-tarefas");
const btnTarefas = document.querySelector(".btn-tarefas");
const tarefas = document.querySelector(".tarefas");

function createLista(textoInput) {
  const li = criarLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
}
console.log(createLista());
function criarLi() {
  const li = document.createElement("li");
  return li;
}

btnTarefas.addEventListener("click", function () {
  if (!inputTarefas.value) return;
  createLista(inputTarefas.value);
});
