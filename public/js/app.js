async function carregarLeads() {
    try {
        const leads = await buscarLeads();
        montarTabela(leads);
    } catch (erro) {
        alert('Não foi possível carregar os leads.');
    }
}

carregarLeads();