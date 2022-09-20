DROP DATABASE IF EXISTS emprestimo_financ;
CREATE DATABASE emprestimo_financ CHARSET=UTF8 COLLATE UTF8_GENERAL_CI;
USE emprestimo_financ;

DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS telefones;
DROP TABLE IF EXISTS emprestimos;
DROP TABLE IF EXISTS parcelas;

CREATE TABLE clientes (
    cpf VARCHAR(14) PRIMARY KEY,
    pri_nome VARCHAR(15) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    complemento VARCHAR(15)
);

DESCRIBE clientes;

CREATE TABLE telefones (
    cpf VARCHAR(14) NOT NULL,
    tipo VARCHAR(15) NOT NULL,
    numero VARCHAR(13) NOT NULL,
    FOREIGN KEY (cpf) REFERENCES clientes(cpf) ON DELETE CASCADE
);

DESCRIBE telefones;

CREATE TABLE emprestimos (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR(14) NOT NULL,
    data DATETIME,
    capital DECIMAL(8,2) NOT NULL,
    n_parcelas INTEGER NOT NULL,
    taxa_juros DECIMAL(2,1) NOT NULL,
    impostos DECIMAL(6,2) NOT NULL,
    montante DECIMAL(8,2) NOT NULL,
    FOREIGN KEY (cpf) REFERENCES clientes(cpf) ON DELETE CASCADE
);

DESCRIBE emprestimos;

CREATE TABLE parcelas (
    id INTEGER NOT NULL,
    vencimento DATETIME NOT NULL,
    pagamento DATETIME,
    valor DECIMAL(8,2) NOT NULL,
    val_recebido DECIMAL(8,2) NOT NULL,
    diferenca DECIMAL(8,2) NOT NULL,
    FOREIGN KEY (id) REFERENCES emprestimos(id) ON DELETE CASCADE
);

DESCRIBE parcelas;

SHOW TABLES;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/BCD/AULA07/db/docs/clientes.csv'
LOAD DATA INFILE 'C:/Users/oryc1/Desktop/SENAI/2DES/BCD/AULA07/db/docs/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/BCD/AULA07/db/docs/telefones.csv'
LOAD DATA INFILE 'C:/Users/oryc1/Desktop/SENAI/2DES/BCD/AULA07/db/docs/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/BCD/AULA07/db/docs/emprestimos.csv'
LOAD DATA INFILE 'C:/Users/oryc1/Desktop/SENAI/2DES/BCD/AULA07/db/docs/emprestimos.csv'
INTO TABLE emprestimos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

UPDATE emprestimos SET montante = (SELECT SUM(capital*(pow((1+taxa_juros),n_parcelas))+impostos)) WHERE id = 1;
UPDATE emprestimos SET montante = (SELECT SUM(capital*(pow((1+taxa_juros),n_parcelas))+impostos)) WHERE id = 2;
UPDATE emprestimos SET montante = (SELECT SUM(capital*(pow((1+taxa_juros),n_parcelas))+impostos)) WHERE id = 3;
UPDATE emprestimos SET montante = (SELECT SUM(capital*(pow((1+taxa_juros),n_parcelas))+impostos)) WHERE id = 4;
UPDATE emprestimos SET montante = (SELECT SUM(capital*(pow((1+taxa_juros),n_parcelas))+impostos)) WHERE id = 5;
UPDATE emprestimos SET montante = (SELECT SUM(capital*(pow((1+taxa_juros),n_parcelas))+impostos)) WHERE id = 6;
UPDATE emprestimos SET montante = (SELECT SUM(capital*(pow((1+taxa_juros),n_parcelas))+impostos)) WHERE id = 7;
UPDATE emprestimos SET montante = (SELECT SUM(capital*(pow((1+taxa_juros),n_parcelas))+impostos)) WHERE id = 8;
UPDATE emprestimos SET montante = (SELECT SUM(capital*(pow((1+taxa_juros),n_parcelas))+impostos)) WHERE id = 9;
UPDATE emprestimos SET montante = (SELECT SUM(capital*(pow((1+taxa_juros),n_parcelas))+impostos)) WHERE id = 10;

SELECT * FROM clientes;
SELECT * FROM telefones;
SELECT * FROM emprestimos;



-- INSERT INTO parcelas VALUES 
-- (DEFAULT,DATE_ADD(CURDATE(),INTERVAL 10 MONTH,NULL,));

-- SELECT * FROM parcelas;

-- DROP TRIGGER IF EXISTS gera_parcela;
-- CREATE TRIGGER calc_montante AFTER INSERT ON emprestimos
--     FOR EACH ROW BEGIN
--         INSERT INTO emprestimos VALUES