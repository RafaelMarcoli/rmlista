// criado 3 variaveis que seleciona os conteudos da pagina html
const inputTarefas = document.querySelector(".input-tarefas");
const btnTarefas = document.querySelector(".btn-tarefas");
const tarefas = document.querySelector(".tarefas");
// criado a funçao de criar listas passando como parametro o textoInput e colocando como filho de
//tarefas que é a classe da tag lu no html
function createList(textoInput) {
  const li = criarLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  clearInput();
  createButton(li);
  salvarTarefas();
}
// funçao que cria os li que seram usados na funçao creatList
function criarLi() {
  const li = document.createElement("li");
  return li;
}
// funçao que cria botoes que seram filhos dos li quando voce cria alguma tarefa e teram a funçao de apagar.
// e adiciona a classe apagar no botao.
function createButton(li) {
  li.innerText += " ";
  const buttonCreate = document.createElement("button");
  buttonCreate.innerText = "Apagar";
  buttonCreate.setAttribute("class", "apagar");
  li.appendChild(buttonCreate);
}
// funçao que limpa o input e da focus
function clearInput() {
  inputTarefas.value = "";
  inputTarefas.focus();
}
// funçao que salva as tarefas criadas pelos li e
function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaTarefas.push(tarefaTexto);
  }
  // Converte o array 'listaTarefas' em uma string JSON
  const tarefaJSON = JSON.stringify(listaTarefas);
  localStorage.setItem("tarefas", tarefaJSON);
}
// funçao que pega as tarefas salvas no localStorage usando a key 'tarefas' e mantem na pagina ao atualizar
function addTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    createList(tarefa);
  }
}
// funcionalidade do botao de criar a tarefa usando o conteudo do input
btnTarefas.addEventListener("click", function () {
  if (!inputTarefas.value) return;
  createList(inputTarefas.value);
});
// funcionalidade de criar tarefa ao apetar enter usando o evento keypress e no if o keycode que identifica a tecla enter
inputTarefas.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefas.value) return;
    createList(inputTarefas.value);
  }
});
// funcionalidade do botao apagar que apaga a tarefa da lista
document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});
addTarefasSalvas();
