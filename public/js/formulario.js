function pegarDadosDoFormulario() {
    return {
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        empresa: document.getElementById('empresa').value,
        status: document.getElementById('status').value,
        observacao: document.getElementById('observacao').value,
        tags: pegarTagsMarcadas()
    };
}

function limparFormulario() {
    document.getElementById('formulario-lead').reset();
    document.getElementById('lead-id').value = '';
    document.getElementById('titulo-formulario').textContent = 'Novo lead';
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

function preencherFormulario(lead) {
    document.getElementById('lead-id').value = lead.id;
    document.getElementById('nome').value = lead.nome;
    document.getElementById('telefone').value = lead.telefone;
    document.getElementById('email').value = lead.email || '';
    document.getElementById('empresa').value = lead.empresa || '';
    document.getElementById('status').value = lead.status;
    document.getElementById('observacao').value = lead.observacao || '';

    const idsDasTags = lead.tags.map(function (tag) {
        return tag.id;
    });

    const caixas = document.querySelectorAll('input[name="tags"]');

    caixas.forEach(function (caixa) {
        caixa.checked = idsDasTags.includes(Number(caixa.value));
    });

    document.getElementById('titulo-formulario').textContent = 'Editar lead';
    limparErros();
    window.scrollTo(0, 0);
}

function montarCheckboxesDeTags(tags) {
    const lista = document.getElementById('lista-tags');
    lista.innerHTML = '';

    tags.forEach(function (tag) {
        const rotulo = document.createElement('label');

        const caixa = document.createElement('input');
        caixa.type = 'checkbox';
        caixa.name = 'tags';
        caixa.value = tag.id;

        rotulo.appendChild(caixa);
        rotulo.appendChild(document.createTextNode(' ' + tag.nome));
        lista.appendChild(rotulo);
    });
}

function pegarTagsMarcadas() {
    const marcadas = document.querySelectorAll('input[name="tags"]:checked');
    const ids = [];

    marcadas.forEach(function (caixa) {
        ids.push(Number(caixa.value));
    });

    return ids;
}
