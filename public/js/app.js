async function carregarLeads() {
    try {
        const leads = await buscarLeads();
        montarTabela(leads);
    } catch (erro) {
        alert('Não foi possível carregar os leads.');
    }
}

carregarLeads();

const formulario = document.getElementById('formulario-lead');

formulario.addEventListener('submit', async function (evento) {
    evento.preventDefault();
    limparErros();

    const dados = pegarDadosDoFormulario();

    try {
        const id = document.getElementById('lead-id').value;
        let resposta;

        if (id) {
            resposta = await atualizarLead(id, dados);
        } else {
            resposta = await cadastrarLead(dados);
        }

        if (resposta.status === 422) {
            const resultado = await resposta.json();
            mostrarErros(resultado.errors);
            return;
        }

        if (!resposta.ok) {
            alert('Erro ao salvar o lead.');
            return;
        }

        limparFormulario();
        carregarLeads();
    } catch (erro) {
        alert('Não foi possível salvar o lead.');
    }
});

const botaoCancelar = document.getElementById('botao-cancelar');

botaoCancelar.addEventListener('click', function () {
    limparFormulario();
});

async function removerLead(lead) {
    const confirmou = confirm('Tem certeza que deseja excluir o lead ' + lead.nome + '?');

    if (!confirmou) {
        return;
    }

    try {
        const resposta = await excluirLead(lead.id);

        if (!resposta.ok) {
            alert('Erro ao excluir o lead.');
            return;
        }

        if (document.getElementById('lead-id').value == lead.id) {
            limparFormulario();
        }

        carregarLeads();
    } catch (erro) {
        alert('Não foi possível excluir o lead.');
    }
}