async function buscarLeads() {
    const resposta = await fetch('/api/leads', {
        headers: { 'Accept': 'application/json' }
    });

    if (!resposta.ok) {
        throw new Error('Erro ao buscar os leads');
    }

    return await resposta.json();
}