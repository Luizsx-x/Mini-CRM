<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <title>Mini CRM</title>
</head>
<body>
    <h1>Leads</h1>
    <h2 id="titulo-formulario">Novo lead</h2>

    <form id="formulario-lead">
        <input type="hidden" id="lead-id">
        <label for="nome">Nome</label>
        <input type="text" id="nome">

        <label for="telefone">Telefone</label>
        <input type="text" id="telefone">

        <label for="email">E-mail</label>
        <input type="email" id="email">

        <label for="empresa">Empresa</label>
        <input type="text" id="empresa">

        <label for="status">Status</label>
        <select id="status">
            <option value="Novo">Novo</option>
            <option value="Contato Realizado">Contato Realizado</option>
            <option value="Negociação">Negociação</option>
            <option value="Fechado">Fechado</option>
            <option value="Perdido">Perdido</option>
        </select>

        <label>Tags</label>
        <div id="lista-tags"></div>

        <label for="observacao">Observação</label>
        <textarea id="observacao"></textarea>

        <div id="mensagem-erro"></div>

        <button type="submit">Salvar</button>
        <button type="button" id="botao-cancelar">Cancelar</button>
    </form>

    <h2>Leads cadastrados</h2>

    <div id="filtros">
        <input type="text" id="busca-nome" placeholder="Buscar por nome...">

        <select id="filtro-status">
            <option value="">Todos os status</option>
            <option value="Novo">Novo</option>
            <option value="Contato Realizado">Contato Realizado</option>
            <option value="Negociação">Negociação</option>
            <option value="Fechado">Fechado</option>
            <option value="Perdido">Perdido</option>
        </select>

        <select id="filtro-tag">
            <option value="">Todas as tags</option>
        </select>
    </div>

    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Empresa</th>
                <th>Status</th>
                <th>Tags</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody id="tabela-leads"></tbody>
    </table>

    <script src="/js/api.js"></script>
    <script src="/js/tabela.js"></script>
    <script src="/js/formulario.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>
