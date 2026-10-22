<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini CRM</title>
</head>
<body>
    <h1>Leads</h1>
    <h2>Novo lead</h2>

    <form id="formulario-lead">
        <label for="nome">Nome</label>
        <input type="text" id="nome">

        <label for="telefone">Telefone</label>
        <input type="text" id="telefone">

        <label for="email">E-mail</label>
        <input type="text" id="email">

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

        <label for="observacao">Observação</label>
        <textarea id="observacao"></textarea>

        <div id="mensagem-erro"></div>

        <button type="submit">Salvar</button>
    </form>

    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Empresa</th>
                <th>Status</th>
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