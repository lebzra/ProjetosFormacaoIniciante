var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){
	
	console.log("buscandoo..");

	var xhr = new XMLHttpRequest();

	xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

	var erroAjax = document.querySelector("#erro-ajax");
	xhr.addEventListener("load", function(){

		if(xhr.status == 200){
			erroAjax.classList.add("ocultarItensPesquisa");
			//console.log("xhr respondendo");
			//console.log(xhr.responseText);
			var resposta = xhr.responseText;
			//console.log(typeof resposta);

			var pacientes = JSON.parse(resposta);
			//console.log(pacientes);
			console.log(typeof pacientes);

			pacientes.forEach( function(paciente){
				console.log(pacientes.length);
				adicionarPacienteNaTabela(paciente);

			});
		}else{
			erroAjax.classList.remove("ocultarItensPesquisa");
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
	xhr.send();

	event.preventDefault();
});