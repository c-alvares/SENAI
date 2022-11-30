DROP DATABASE IF EXISTS dentista;
CREATE DATABASE dentista CHARSET=UTF8 COLLATE UTF8_GENERAL_CI;
USE dentista;

-- DDL
CREATE TABLE profissionais (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especialidade VARCHAR(25) NOT NULL
);

DESCRIBE profissionais;

CREATE TABLE consultas (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    paciente VARCHAR(50) NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    id_profissional INTEGER NOT NULL,
    CONSTRAINT fk_consultas FOREIGN KEY (id_profissional) REFERENCES profissionais(id)
);

DESCRIBE consultas;

CREATE TABLE tratamentos (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_consulta INTEGER NOT NULL,
    tratamento VARCHAR(25) NOT NULL,
    valor DECIMAL(7,2) NOT NULL,
    CONSTRAINT fk_tratamentos FOREIGN KEY (id_consulta) REFERENCES consultas(id)
);

DESCRIBE tratamentos;


-- DML
INSERT INTO profissionais VALUES
(default, "Ana Flávia", "Dentista"),
(default, "Maria Silva", "Ortodentista"),
(default, "Marcos Coelho", "Anestesista");

SELECT * FROM profissionais;

INSERT INTO consultas VALUES
(default, "Carlos Roberto", "2022-11-23", "13:45:00", 1),
(default, "Juliana Solza", "2022-11-23", "14:45:00", 1),
(default, "Carla Oliveira", "2022-11-23", "15:45:00", 1),
(default, "Mariana Oliveira", "2022-11-23", "13:45:00", 2),
(default, "Gilberto Solza", "2022-11-23", "14:45:00", 2),
(default, "Carolnia Oliveira", "2022-11-23", "15:45:00", 2),
(default, "Ester Oliveira", "2022-11-23", "13:45:00", 3),
(default, "Flávia Mattos", "2022-11-23", "14:45:00", 3),
(default, "Carolnia Martins", "2022-11-23", "15:45:00", 3);

SELECT * FROM consultas;

INSERT INTO tratamentos VALUES
(default, 1, "Carie", 100.00),
(default, 1, "Limpeza", 50.00),
(default, 2, "Canal", 500.00),
(default, 2, "Limpeza", 50.00),
(default, 3, "Prótese", 1000.00),
(default, 4, "Prótese", 1000.00),
(default, 5, "Correção Óssea", 1500.00),
(default, 5, "Limpeza", 50.00),
(default, 6, "Extração", 300.00),
(default, 6, "Implante", 2000.00),
(default, 7, "Limpeza", 50.00),
(default, 8, "Limpeza", 50.00),
(default, 9, "Limpeza", 50.00);

SELECT * FROM tratamentos;

-- DQL
CREATE VIEW vw_dentistas AS
SELECT p.id, p.nome, p.especialidade, c.id as id_consulta, c.paciente, c.data, c.horario, t.id as id_tratamento, t.tratamento, t.valor
FROM profissionais p INNER JOIN consultas c ON p.Id = c.id_profissional
INNER JOIN tratamentos t ON c.id = t.id_consulta;

SELECT * FROM vw_dentistas;