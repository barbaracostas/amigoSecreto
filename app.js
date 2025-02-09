let nomes = [];
function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    
    if (amigo.length > 0) {
        nomes.push(amigo); 
        document.getElementById('amigo').value = ''; 
        atualizarLista(); 
    } else {
        alert('Por favor, digite um nome válido!');
    }
}
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < nomes.length; i++) {
        let item = document.createElement('li');
        item.textContent = nomes[i];
        item.classList.add('name-item'); 
        lista.appendChild(item);
    }
}
function sortearAmigo() {
    if (nomes.length == 0) { 
        alert('A lista está vazia! Adicione nomes antes de sortear.');
        return;
    }

    let nomeSorteado = Math.floor(Math.random() * nomes.length); 
    let amigoSecreto = nomes[nomeSorteado]; 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class='result-item'>O amigo secreto é: <strong>${amigoSecreto}</strong></li>`; 
}
