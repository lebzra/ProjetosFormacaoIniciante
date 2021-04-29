//componente Botao Deletar
const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'Deletar';
    botaoDeleta.addEventListener('click', deletarTarefa);
    return botaoDeleta;
}

const deletarTarefa = (evento) =>{
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    console.log(tarefaCompleta);
    tarefaCompleta.remove();
}

export default BotaoDeleta;