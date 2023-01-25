DROP DATABASE IF EXISTS IRango;
CREATE DATABASE IRango CHARSET=utf8 COLLATE utf8_general_ci;
USE IRango;

CREATE TABLE entregadores(
    ID_Entregador NUMERIC(4) NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Senha VARCHAR(50) NOT NULL,
    Veiculo VARCHAR(50) NOT NULL,
    CONSTRAINT pk_entregador primary key (ID_Entregador)
);

CREATE TABLE pedidos(
    ID_Pedido NUMERIC(4) NOT NULL AUTO_INCREMENT,
    Cliente VARCHAR(50) NOT NULL,
    Endereco VARCHAR(50) NOT NULL,
    Produto VARCHAR(50) NOT NULL,
    data DATE NOT NULL,
    Hora_pedido TIME NOT NULL,
    Hora_entrega TIME NULL,
    Hora_fim TIME NULL,
    Entregador NUMERIC(4) NOT NULL,
    CONSTRAINT pk_pedido primary key (ID_Pedido),
    FOREIGN KEY (Entregador) REFERENCES entregadores(ID_Entregador)
);

DESCRIBE entregadores;
DESCRIBE pedidos;


-- Importação dos dados com LOAD DATA de arquivos CSV

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/3DES/PROJ/AULA01/DADOS/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/3DES/PROJ/AULA01/DADOS/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


-- Lista todos os pedidos
DROP VIEW IF EXISTS View_ListarPedidos;
CREATE VIEW View_ListarPedidos AS
SELECT * FROM pedidos;

SELECT * FROM View_ListarPedidos;

-- Lista pedidos em execução
DROP VIEW IF EXISTS View_PedidosEmExecucao;
CREATE VIEW View_PedidosEmExecucao AS
SELECT ID_Pedido, Cliente, Endereco, Produto, data, Hora_pedido FROM 
pedidos WHERE Hora_entrega = '00:00:00' AND Hora_fim = '00:00:00';

SELECT * FROM View_PedidosEmExecucao;


-- Lista pedidos para entrega
DROP VIEW IF EXISTS View_PedidosParaEntrega;
CREATE VIEW View_PedidosParaEntrega AS
SELECT * FROM
pedidos WHERE Hora_fim = '00:00:00';

SELECT * FROM View_PedidosParaEntrega;