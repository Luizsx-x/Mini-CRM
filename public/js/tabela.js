function criarCelula(texto) {
    const celula = document.createElement('td');
    celula.textContent = texto;
    return celula;
}

function montarTabela(leads) {
    const tabela = document.getElementById('tabela-leads');
    tabela.innerHTML = '';

    if (leads.length === 0) {
        tabela.innerHTML = '<tr><td colspan="5">Nenhum lead encontrado.</td></tr>';
        return;
    }

    leads.forEach(function (lead) {
        const linha = document.createElement('tr');

        linha.appendChild(criarCelula(lead.nome));
        linha.appendChild(criarCelula(lead.telefone));
        linha.appendChild(criarCelula(lead.empresa || '-'));
        linha.appendChild(criarCelula(lead.status));

        const celulaAcoes = document.createElement('td');

        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.addEventListener('click', function () {
            preencherFormulario(lead);
        });

        celulaAcoes.appendChild(botaoEditar);

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.className = 'botao-excluir';
        botaoExcluir.addEventListener('click', function () {
            removerLead(lead);
        });

        celulaAcoes.appendChild(botaoExcluir);
        linha.appendChild(celulaAcoes);

        tabela.appendChild(linha);
    });
}