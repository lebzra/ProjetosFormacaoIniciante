var pacientes = document.querySelectorAll(".paciente"); // retorna um array a partir do nome da classe paciente

for(var i = 0; i < pacientes.length; i++){
	
	var paciente = pacientes[i]; // trabalha com um item do array na página
	
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if(!pesoEhValido){
		tdImc.textContent = "Peso inválido";
		pesoEhValido = false;
		paciente.classList.add("dados-paciente-invalido");
	}
	if(!alturaEhValida) {
		alturaEhValida = false;
		tdImc.textContent = "Altura inválida";
		paciente.classList.add("dados-paciente-invalido");
	}
// classList.add adiciona(configura) uma classe do CSS que se deseja atribuir o elmento no html
	if(pesoEhValido && alturaEhValida){
		var imc = calculaImc(peso, altura);
		tdImc = paciente.querySelector(".info-imc");
		tdImc.textContent = imc;
	}
}

function validaPeso(peso){
	if(peso >= 0 && peso <= 1000){
		return true;
	}else{
		return false;
	}
}
function validaAltura(altura){
	if(altura >= 0 && altura < 3){
		return true;
	}else{
		return false;
	}
}

function calculaImc(peso, altura){
	var imc = peso / (altura * altura);	
	return imc.toFixed(2);
}