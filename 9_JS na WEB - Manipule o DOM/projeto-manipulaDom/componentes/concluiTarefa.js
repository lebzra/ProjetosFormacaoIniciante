//Componentes são independentes. Criando um botão Concluir
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Concluir';
    botaoConclui.addEventListener('click',concluirTarefa);
    return botaoConclui;
}

const concluirTarefa = (evento) =>{
    var botaoConclui = evento.target;
    var tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle('done'); //toggle - alternar
}

export default BotaoConclui; // exportamos o botão como componente