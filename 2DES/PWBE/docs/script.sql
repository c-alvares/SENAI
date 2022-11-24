DROP DATABASE IF EXISTS saude;
CREATE DATABASE saude CHARSET=UTF8 COLLATE UTF8_GENERAL_CI;
USE saude;

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
    tratamento VARCHAR(20) NOT NULL,
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

-- https://github.com/wellifabio/senai2022/tree/master/2des/pwbe/aula15
-- https://www.w3schools.com/sql/sql_examples.asp