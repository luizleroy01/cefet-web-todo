const tarefas = [
  {
    nome: "Tarefa 1",
    categoria: "lazer",
    realizada: true,
  },
  {
    nome: "Tarefa 2",
    categoria: "Lazer",
    realizada: false,
  },
  {
    nome: "Tarefa 3",
    categoria: "compras",
    realizada: false,
  },
  {
    nome: "Tarefa 4",
    categoria: "estudos",
    realizada: false,
  },
];

const listaTarefasEl = document.querySelector("#lista-tarefas");
const novaTarefaNomeTarefa = document.querySelector("#nova-tarefa-nome");
const novaTarefaCategoriaTarefa = document.querySelector("#nova-tarefa-categoria");
const botaoIncluirTarefa = document.querySelector("#incluir-nova-tarefa");
const filtroCategoriaEl = document.querySelector("#filtro-de-categoria");

function aplicarFiltro() {
  const categoriaSelecionada = filtroCategoriaEl.value
  const itens = document.querySelectorAll('.item-tarefa')

  itens.forEach((item, index) => {
    item.classList.remove('retido-no-filtro')
    if (
      categoriaSelecionada !== '' &&
      tarefas[index].categoria !== categoriaSelecionada
    ) {
      item.classList.add('retido-no-filtro')
    }
  })
}



function incluirNovaTarefa() {
  const nome = novaTarefaNomeTarefa.value.trim()
  const categoria = novaTarefaCategoriaTarefa.value

  if (nome === '') return

  const novaTarefa = {
    nome,
    categoria,
    realizada: false
  }

  tarefas.push(novaTarefa)

  insereTarefaNaPagina(novaTarefa)

  novaTarefaNomeTarefa.value = ''
  novaTarefaNomeTarefa.focus()

  //aplicarFiltro()
}


function insereTarefaNaPagina(tarefa) {
  const li = document.createElement("li");

  li.textContent = tarefa.nome;
  li.classList.add("item-tarefa");
  li.classList.add(`categoria-${tarefa.categoria}`);

  if (tarefa.realizada) {
    li.classList.add("marcado");
  }

  // Opcional 5
  li.addEventListener("click", () => {
    tarefa.realizada = !tarefa.realizada;
    li.classList.toggle("marcado");
  });

  listaTarefasEl.appendChild(li);
}

function exibirTarefas() {
  listaTarefasEl.innerHTML = "";

  tarefas.forEach((tarefa) => {
    insereTarefaNaPagina(tarefa);
  });

  //aplicarFiltro()
}

botaoIncluirTarefa.addEventListener('click', incluirNovaTarefa);
filtroCategoriaEl.addEventListener('change', aplicarFiltro);

exibirTarefas();
