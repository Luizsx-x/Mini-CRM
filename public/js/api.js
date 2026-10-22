async function buscarLeads() {
    const resposta = await fetch('/api/leads', {
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