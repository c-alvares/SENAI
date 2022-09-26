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
    FOREIGN KEY (cpf) REFERENCES clientes(cpf) ON DELETE CASCADE ON UPDATE CASCADE
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
    montante FLOAT(20,2) NOT NULL,
    FOREIGN KEY (cpf) REFERENCES clientes(cpf) ON DELETE CASCADE ON UPDATE CASCADE
);

DESCRIBE emprestimos;

CREATE TABLE parcelas (
    id INTEGER NOT NULL,
    vencimento DATETIME NOT NULL,
    pagamento DATETIME,
    valor DECIMAL(8,2) NOT NULL,
    val_recebido DECIMAL(8,2) NOT NULL,
    diferenca DECIMAL(8,2) NOT NULL,
    FOREIGN KEY (id) REFERENCES emprestimos(id) ON DELETE CASCADE ON UPDATE CASCADE
);

DESCRIBE parcelas;

SHOW TABLES;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/BCD/AULA07/db/docs/clientes.csv'
-- LOAD DATA INFILE 'C:/Users/oryc1/Desktop/SENAI/2DES/BCD/AULA07/db/docs/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/BCD/AULA07/db/docs/telefones.csv'
-- LOAD DATA INFILE 'C:/Users/oryc1/Desktop/SENAI/2DES/BCD/AULA07/db/docs/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/BCD/AULA07/db/docs/emprestimos.csv'
-- LOAD DATA INFILE 'C:/Users/oryc1/Desktop/SENAI/2DES/BCD/AULA07/db/docs/emprestimos.csv'
INTO TABLE emprestimos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

UPDATE emprestimos SET montante = (SELECT SUM( capital * (pow(( 1 + taxa_juros / 100 ), n_parcelas)) + impostos )) WHERE id != 0;

SELECT * FROM clientes;
SELECT * FROM telefones;
SELECT * FROM emprestimos;
SELECT * FROM parcelas;

-- DROP TRIGGER IF EXISTS geraParcela;
-- CREATE TRIGGER geraParcela AFTER INSERT ON emprestimos
--     FOR EACH ROW BEGIN
--         INSERT INTO emprestimos VALUES
--             (DEFAULT,DATE_ADD(SELECT data FROM emprestimos ),NULL,)

-- INSERT INTO parcelas VALUES 
-- (DEFAULT,DATE_ADD(CURDATE(),INTERVAL 10 MONTH,NULL,));

-- SELECT * FROM parcelas;


DROP TRIGGER IF EXISTS geraParcela;
CREATE TRIGGER 
    geraParcela AFTER INSERT ON emprestimos FOR EACH ROW 
    INSERT INTO parcelas VALUES (DEFAULT,curdate(),NULL,10, 200, val_recebido - valor);

INSERT INTO clientes VALUES ("123.456.789-12","Otto","Vonbell","13912-515",NULL);
INSERT INTO telefones VALUES ("123.456.789-12","celular","16-982763-0237");
INSERT INTO emprestimos VALUES (DEFAULT,"123.456.789-12",DATE_SUB(curdate(),INTERVAL 16 MONTH),2000.00,15,0.9,350,0);
UPDATE emprestimos SET montante = (SELECT SUM( capital * (pow(( 1 + taxa_juros / 100 ), n_parcelas)) + impostos )) WHERE id != 0;