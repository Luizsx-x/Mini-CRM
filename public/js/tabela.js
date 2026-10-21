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
        linha.appendChild(criarCelula(''));

        tabela.appendChild(linha);
    });
}