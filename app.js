let amigos = [];
let amigosSorteados = [];

function atribuirNomes()
 {
document.getElementById('resultado').innerHTML = '';
let nomes = document.querySelector('input').value
if (/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nomes.trim())) {
    if (!amigos.includes(nomes.trim())) {
        amigos.push(nomes.trim());
        console.log(amigos);
        limparCampo();
    } else {
        alert("Nome já adicionado!");
        limparCampo();
    }
} else { 
    alert("Digite um nome valido!");
    limparCampo();
}
}

function limparCampo() 
{
document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    let naoSorteados = amigos.filter(a => !amigosSorteados.includes(a));
    if (naoSorteados.length === 0) {
        return alert("Todos os amigos já foram sorteados!");
    }

    let indiceSorteado = Math.floor(Math.random() * naoSorteados.length);
    let amigoSorteado = naoSorteados[indiceSorteado];
    amigosSorteados.push(amigoSorteado);

    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = '';

    naoSorteados.forEach(amigo => {
        if (amigo === amigoSorteado) {
            let li = document.createElement('li');
            li.textContent = amigo;
            campoResultado.appendChild(li);
        }
    });
}


 