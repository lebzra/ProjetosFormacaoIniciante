var pacientes = document.querySelectorAll(".paciente");


// efeito bubling do navegador com JS. Ação de um evento repecurte nos elementos de hierarquia acima.
// td -> tr -> tbody -> table e ...

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	/*var alvoEvento = event.target;
	var paiAlvo = alvoEvento.parentNode.classList.add("fadeOut"); //retorna o elemento no pai - hierarquia acima
	paiAlvo.remove();
	*/
	if(event.target.tagName == "TD"){
		event.target.parentNode.classList.add("fadeOut");
		setTimeout(function(){
		event.target.parentNode.remove();
		},200);	
	}
});

/*
pacientes.forEach(function (paciente){
	paciente.addEventListener("dblclick", function(){
		console.log("Fui clickado DBL");
		this.remove();
	});
});

*/