async function buscarLeads(nome, status, tag) {
    const url = '/api/leads?nome=' + encodeURIComponent(nome)
        + '&status=' + encodeURIComponent(status)
        + '&tag=' + encodeURIComponent(tag);

    const resposta = await fetch(url, {
        headers: { 'Accept': 'application/json' }
    });

    if (!resposta.ok) {
        throw new Error('Erro ao buscar os leads');
    }

    return await resposta.json();
}

async function cadastrarLead(dados) {
    const resposta = await fetch('/api/leads', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });

    return resposta;
}

async function atualizarLead(id, dados) {
    const resposta = await fetch('/api/leads/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });

    return resposta;
}

async function excluirLead(id) {
    const resposta = await fetch('/api/leads/' + id, {
        method: 'DELETE',
        headers: { 'Accept': 'application/json' }
    });

    return resposta;
}

async function buscarTags() {
    const resposta = await fetch('/api/tags', {
        headers: { 'Accept': 'application/json' }
    });

    if (!resposta.ok) {
        throw new Error('Erro ao buscar as tags');
    }

    return await resposta.json();
}
