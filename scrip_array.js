const listaTarefas = ['Estudar', "cozinhar", "Ler"]

const lista_html = document.getElementById('lista-tarefas') 

listaTarefas.forEach(function(tarefa){
    const itemLista = document.createElement('li');

    itemLista.textContent = tarefa;

    lista_html.appendChild(itemista)


})