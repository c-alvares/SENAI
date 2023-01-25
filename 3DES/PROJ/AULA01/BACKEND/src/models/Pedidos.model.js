// Cria novo pedido
const novoPedido = (model) => {
    return `INSERT INTO pedidos VALUES (DEFAULT,'${model.Cliente}','${model.Endereco}','${model.Produto}',CURDATE(),CURTIME(),NULL,NULL,'${model.Entregador}')`;
}


// Lista todos os pedidos
const mostrarPedidos = () => {
    return `SELECT * FROM View_ListarPedidos`;
}

// Lista um pedido pelo nome do cliente
const mostrarPedidoPorCliente = (model) => {
    return `SELECT * FROM pedidos WHERE Cliente LIKE '%${model.Cliente}%'`;
}

// Lista pedidos em execução
const PedidosEmExecucao = () => {
    return `SELECT * FROM View_PedidosEmExecucao`;
}

// Lista pedidos PARA entrega
const PedidosParaEntrega = () => {
    return `SELECT * FROM View_PedidosParaEntrega`;
}


// Atualiza hora de término do pedido pelo nome do cliente
const atualizarPedidoPronto = (model) => {
    return `UPDATE pedidos SET 
                Hora_entrega = CURTIME() 
            WHERE Cliente LIKE '%${model.Cliente}%'`; 
            // AND Hora_entrega = 'NULL'`;
}

// Atualiza hora de entrega do pedido pelo nome do cliente
const atualizarPedidoEntregue = (model) => {
    return `UPDATE pedidos SET 
                Hora_fim = CURTIME() 
            WHERE Cliente LIKE '%${model.Cliente}%'`;
            // AND Hora_fim = 'NULL'
}


// Exclui um pedido
// Necessária implementação de regra para assegurar que o pedido só pode ser excluído caso não tenha sido preparado
const excluirPedido = (model) => {
    return `DELETE FROM pedidos WHERE Cliente LIKE '%${model.Cliente}%'`; 
    // AND Hora_entrega = 'NULL'`;
}

module.exports = {
    novoPedido,
    mostrarPedidos,
    mostrarPedidoPorCliente,
    PedidosEmExecucao,
    PedidosParaEntrega,
    atualizarPedidoPronto,
    atualizarPedidoEntregue,
    excluirPedido
}