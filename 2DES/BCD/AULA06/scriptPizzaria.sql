-- Remover o banco de dados caso exista, criar um novo na formatação correta e acessá-lo.
DROP DATABASE IF EXISTS pizzaria;
CREATE DATABASE pizzaria CHARSET=UTF8 COLLATE UTF8_GENERAL_CI;
USE pizzaria;

-- Remover as tabelas, caso existam
DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS pizza;
DROP TABLE IF EXISTS pedido;
DROP TABLE IF EXISTS item_pedido;

-- Criar tabela cliente
CREATE TABLE cliente (
    cliente_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    telefone VARCHAR(15),
    nome VARCHAR(30),
    logradouro VARCHAR(45),
    numero DECIMAL(5,0),
    complemento VARCHAR(30),
    bairro VARCHAR(30),
    referencia VARCHAR(45)
);
DESCRIBE cliente;

CREATE TABLE pizza (
    pizza_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30),
    descricao VARCHAR(80),
    valor DECIMAL(4,2)
);
DESCRIBE pizza;

CREATE TABLE pedido (
    pedido_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    cliente_id INTEGER NOT NULL,
    data DATETIME,
    valor DECIMAL (5,2),
    FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id) ON DELETE CASCADE
);
DESCRIBE pedido;

CREATE TABLE item_pedido (
    pedido_id INTEGER,
    pizza_id INTEGER,
    quantidade DECIMAL(2,0),
    valor DECIMAL(5,2),
    FOREIGN KEY(pedido_id) REFERENCES pedido(pedido_id) ON DELETE CASCADE,
    FOREIGN KEY(pizza_id) REFERENCES pizza(pizza_id)
);
DESCRIBE item_pedido;

SHOW TABLES;

-- Importação manual
INSERT INTO cliente VALUES
(DEFAULT,"(19) 99957-6718","Ciro Alvarez","Rua Rio de Janeiro","82","B","CharlieVille","Ao lado da padaria"),
(DEFAULT,"(11) 98257-3232","Hideaki Anno","Avenida Brasil","07","Apto 22","SierraVille",""),
(DEFAULT,"(14) 8423-8477","Otto Schultz","Travessa da República","35","Fundos","BravoVille","Na rua da Otica Pimenta"),
(DEFAULT,"(16) 9165-9090","Bruna Rocha","Praça do Mirante","672","","EckoVille","Em frente a estação de trem Artemis"),
(DEFAULT,"(21) 78567-1235","Juliana Toledo","Estrada do Matuto","122","Casa 11","TangoVille","Ao lado ao Banco Delta");

INSERT INTO pizza VALUES
(DEFAULT,"Marguerita","Mussarela de búfala, molho caseiro, tomate, manjericão fresco","47.90"),
(DEFAULT,"Calabresa","Mussarela, molho caseiro, calabresa defumada, cebola","47.90"),
(DEFAULT,"Frango com Catupiry","Mussarela, molho caseiro, frango moído, catupiry","47.90"),
(DEFAULT,"Portuguesa","Mussarela, molho caseiro, ovo, cebola, azeitona, presunto cozido","47.90"),
(DEFAULT,"Aliche","Mussarela, molho caseiro, tomate cereja, filés de anchovas, azeitona","50.90"),
(DEFAULT,"Lombo","Mussarela, molho caseiro, lombo defumado, catupiry","50.90"),
(DEFAULT,"Funghi","Mussarela, molho caseiro, cebola roxa, cogumelo paris, shitake, shimeji","50.90"),
(DEFAULT,"Rúcula","Mussarela de búfala, molho caseiro, tomate seco, rúcula","47.90"),
(DEFAULT,"Peperoni","Mussarela, molho caseiro, peperoni","50.90"),
(DEFAULT,"4 Queijos","Mussarela, molho caseiro, parmesão, gorgonzola, provolone","52.90");

INSERT INTO pedido VALUES
(DEFAULT,2,DATE_SUB(CURDATE(),INTERVAL 7 DAY),NULL),
(DEFAULT,3,DATE_SUB(CURDATE(),INTERVAL 6 DAY),NULL),
(DEFAULT,2,DATE_SUB(CURDATE(),INTERVAL 4 DAY),NULL),
(DEFAULT,4,DATE_SUB(CURDATE(),INTERVAL 4 DAY),NULL),
(DEFAULT,1,DATE_SUB(CURDATE(),INTERVAL 4 DAY),NULL),
(DEFAULT,1,DATE_SUB(CURDATE(),INTERVAL 3 DAY),NULL),
(DEFAULT,5,DATE_SUB(CURDATE(),INTERVAL 1 DAY),NULL);

INSERT INTO item_pedido VALUES
(1,3,2,(SELECT valor FROM pizza WHERE pizza_id = 3)),
(2,2,1,(SELECT valor FROM pizza WHERE pizza_id = 2)),
(3,7,1,(SELECT valor FROM pizza WHERE pizza_id = 7)),
(3,1,1,(SELECT valor FROM pizza WHERE pizza_id = 1)),
(4,9,3,(SELECT valor FROM pizza WHERE pizza_id = 9)),
(5,10,1,(SELECT valor FROM pizza WHERE pizza_id = 10)),
(6,8,1,(SELECT valor FROM pizza WHERE pizza_id = 8)),
(7,6,1,(SELECT valor FROM pizza WHERE pizza_id = 6)),
(7,5,1,(SELECT valor FROM pizza WHERE pizza_id = 5)),
(7,4,1,(SELECT valor FROM pizza WHERE pizza_id = 4));

UPDATE pedido SET valor = (SELECT SUM(quantidade * valor) FROM item_pedido WHERE pedido_id = 1) WHERE pedido_id = 1;
UPDATE pedido SET valor = (SELECT SUM(quantidade * valor) FROM item_pedido WHERE pedido_id = 2) WHERE pedido_id = 2;
UPDATE pedido SET valor = (SELECT SUM(quantidade * valor) FROM item_pedido WHERE pedido_id = 3) WHERE pedido_id = 3;
UPDATE pedido SET valor = (SELECT SUM(quantidade * valor) FROM item_pedido WHERE pedido_id = 4) WHERE pedido_id = 4;
UPDATE pedido SET valor = (SELECT SUM(quantidade * valor) FROM item_pedido WHERE pedido_id = 5) WHERE pedido_id = 5;
UPDATE pedido SET valor = (SELECT SUM(quantidade * valor) FROM item_pedido WHERE pedido_id = 6) WHERE pedido_id = 6;
UPDATE pedido SET valor = (SELECT SUM(quantidade * valor) FROM item_pedido WHERE pedido_id = 7) WHERE pedido_id = 7;

SELECT * FROM cliente;
SELECT * FROM pizza;
SELECT * FROM pedido;
SELECT * FROM item_pedido;
