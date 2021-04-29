import BotaoConclui from './componentes/concluiTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';
//( () => { // IIFE - 

const criarTarefa = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    console.log(valor);
 
    const lista = document.querySelector('[data-list]');
 
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui()); // uso de nomes Caixa Alta para componentes
    tarefa.appendChild(BotaoDeleta());

    lista.appendChild(tarefa);
    input.value = '';
    input.focus();
}

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);

//})()