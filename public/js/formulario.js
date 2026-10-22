function pegarDadosDoFormulario() {
    return {
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        empresa: document.getElementById('empresa').value,
        status: document.getElementById('status').value,
        observacao: document.getElementById('observacao').value
    };
}

function limparFormulario() {
    document.getElementById('formulario-lead').reset();
    limparErros();
}

function mostrarErros(erros) {
    const caixa = document.getElementById('mensagem-erro');
    caixa.innerHTML = '';

    for (const campo in erros) {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = erros[campo][0];
        caixa.appendChild(paragrafo);
    }
}

function limparErros() {
    document.getElementById('mensagem-erro').innerHTML = '';
}