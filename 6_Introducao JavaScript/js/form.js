var botaoInserir = document.querySelector("#adicionar-paciente");

// uso addEventListener para manipular o que o navegador está escutando, caso do evento click.
	botaoInserir.addEventListener("click",function(event){ 	
	event.preventDefault();
	//obter dados do paciente da tabela
	var form = document.querySelector("#form-adicionar");	
	var paciente = obterPacienteDoForm(form);

	var erros = validaPaciente(paciente);
	console.log(erros);

	if(erros.length > 0){
		exibeMensagemErro(erros);
		return;
	}

	adicionarPacienteNaTabela(paciente);
	
	var mensagemErro = document.querySelector("#erro-mensagem");
	mensagemErro.innerHTML = "";
	form.reset();
});

function adicionarPacienteNaTabela(paciente){
	var pacienteTr = montarTrPaciente(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
	}

function obterPacienteDoForm(form){
	var paciente = { nome: form.nome.value,
					 peso: form.peso.value,
					 altura: form.altura.value,
					 gordura: form.gordura.value,
					 imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montarTrPaciente(paciente){
	var pacienteTr = document.createElement("tr");
		pacienteTr.classList.add("paciente");
/*
	var nomeTd = montarTdPaciente(paciente.nome, "info-nome");
	var pesoTd = montarTdPaciente(paciente.peso, "info-peso");
	var alturaTd = montarTdPaciente(paciente.altura, "info-altura");
	var gorduraTd = montarTdPaciente(paciente.gordura, "info-gordura");
	var imcTd = montarTdPaciente(paciente.imc, "info-imc");
*/		
	pacienteTr.appendChild(montarTdPaciente(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montarTdPaciente(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montarTdPaciente(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montarTdPaciente(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montarTdPaciente(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montarTdPaciente(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validaPaciente(paciente){
	
	var erros = [];

	if(paciente.nome.length == 0){
		erros.push("O nome não pode ser em branco");
	}

	if(!validaPeso(paciente.peso)){
		erros.push("Valor do peso inserido é inválido");
	}

	if(!validaAltura(paciente.altura)){
		erros.push("Valor do altura inserida é inválida");
	}

	if(paciente.gordura.length == 0){
		erros.push("A gordura não pode ser em branco");
	}
	if(paciente.peso.length == 0){
		erros.push("O peso não pode ser em branco");
	}

	if(paciente.altura.length == 0){
		erros.push("A altura não pode ser em branco");
	}
	return erros;
}

function exibeMensagemErro(erros){
	var ul = document.querySelector("#erro-mensagem");
	ul.innerHTML = "";	
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}