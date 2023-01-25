const pedidos = require('../models/Pedidos.model');
const con = require('../DAO/irango.dao')

const criarPedido = (req, res) => {
    con.query(pedidos.novoPedido(req.body), (err, result) => {
        if (err == null)
            res.json('Cadastrado com Sucesso').status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const todosOsPedidos = (req, res) => {
    con.query(pedidos.mostrarPedidos(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end()
    });
}

const pedidoPorNome = (req, res) => {
    con.query(pedidos.mostrarPedidoPorCliente(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end()
        else
            res.status(500).end()
    });
}


const PedidosAPreparar = (req, res) => {
    con.query(pedidos.PedidosEmExecucao(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end()
    });
}

const PedidosAEntregar = (req, res) => {
    con.query(pedidos.PedidosParaEntrega(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end()
    });
}

const atualizarPedidoPronto = (req, res) => {
    con.query(pedidos.atualizarPedidoPronto(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).json(result).end();
        else
            res.status(500).end();
    });
}

const atualizarPedidoEntregue = (req, res) => {
    con.query(pedidos.atualizarPedidoEntregue(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).json(result).end();
        else
            res.status(500).end();
    });
}

const deletarPedido = (req, res) => {
    con.query(pedidos.excluirPedido(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json('Deletado com Sucesso').status(204).end();
            else
                res.json(result).status(404).end();
        else
            res.status(400).end();
    });
}

module.exports = {
    criarPedido,
    todosOsPedidos,
    pedidoPorNome,
    PedidosAPreparar,
    PedidosAEntregar,
    atualizarPedidoPronto,
    atualizarPedidoEntregue,
    deletarPedido
}