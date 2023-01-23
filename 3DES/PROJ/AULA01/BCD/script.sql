DROP DATABASE IF EXISTS IRango;
CREATE DATABASE IRango CHARSET=utf8 COLLATE utf8_general_ci;
USE IRango;

CREATE TABLE entregadores(
    ID_Entregador NUMERIC(4) NOT NULL,
    Nome VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Senha VARCHAR(50) NOT NULL,
    Veiculo VARCHAR(50) NOT NULL,
    CONSTRAINT pk_entregador primary key (ID_Entregador)
);

CREATE TABLE pedidos(
    ID_Pedido NUMERIC(4) NOT NULL,
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
-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/3DES/PROJ/AULA01/DADOS/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM entregadores;


LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/3DES/PROJ/AULA01/DADOS/pedidos.csv'
-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/3DES/PROJ/AULA01/DADOS/entregadores.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM pedidos;