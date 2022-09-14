DROP DATABASE IF EXISTS livro_caixa;
CREATE DATABASE livro_caixa CHARSET=utf8 COLLATE UTF8_GENERAL_CI;
USE livro_caixa;

CREATE TABLE lancamentos (
    n_lancamento INTEGER NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
    day DATE NOT NULL,
    descricao VARCHAR(30) NOT NULL,
    valor FLOAT(5,2) NOT NULL,
    tipo VARCHAR(1)
);

DESCRIBE lancamentos;

SHOW TABLES;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/PWBE/AULA07/back_miyagi/docs/db/lancamentos.csv'
LOAD DATA INFILE 'C:/Users/oryc1/Desktop/SENAI/2DES/PWBE/AULA07/back_miyagi/docs/db/lancamentos.csv'
INTO TABLE lancamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM lancamentos;