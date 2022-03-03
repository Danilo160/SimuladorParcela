function adicionaTarefas(){
	var nometarefa = document.getElementById('tarefa').value;
	var texttarefa = document.createTextNode(nometarefa);
	document.getElementById('tarefa').value = '';
	if (nometarefa==''){
		alert("Insira uma tarefa para que ela possa ser adicionada!");
		return false;
	}
	var lista = document.createElement("li");
	lista.id = 'itens'
	lista.appendChild(texttarefa);
	document.getElementById("divtarefas").appendChild(lista);
	document.getElementById("divtarefas").style.backgroundColor = 'white';
}

function limparTarefas(){
	if(document.getElementById("divtarefas").style.backgroundColor !== 'white'){
		alert("Não há tarefas para limpar!");
		return false;
	}
	document.getElementById('divtarefas').remove();
	var div = document.createElement("div");
	div.id = 'divtarefas'
	document.querySelector('form').appendChild(div);

	}

