var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
	
	console.log(this.value);

	pacientes = document.querySelectorAll(".paciente");

	if(this.value.length > 0){
		console.log("digitado um");
		for(var i = 0; i < pacientes.length; i++){
			var paciente = pacientes[i];
			var tdNome = paciente.querySelector(".info-nome");
			var nome = tdNome.textContent;

			var expressaoBusca = new RegExp(this.value, "i");

			if(!expressaoBusca.test(nome)){
				paciente.classList.add("ocultarItensPesquisa");
			}else{
				paciente.classList.remove("ocultarItensPesquisa");
			}
			/*
			if(nome != this.value){
				paciente.classList.add("ocultarItensPesquisa");
			}else{
				paciente.classList.remove("ocultarItensPesquisa");
			}
			*/
		}
	}else{
		for (var i = 0; i < pacientes.length; i++) {
			var paciente = pacientes[i];
			paciente.classList.remove("ocultarItensPesquisa");
		}
	}
});