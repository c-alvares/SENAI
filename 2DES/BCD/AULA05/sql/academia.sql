drop database if exists academia;
create database academia charset=UTF8 collate utf8_general_ci;
use academia;

create table telefones(
    id_aluno integer not null,
    numero varchar(15) not null
);

create table alunos(
    id_aluno integer not null primary key auto_increment,
    nome varchar(50) not null,
    nascimento date not null,
    sexo varchar(1) not null,
    peso float(5,2)
);

create table exercicios(
    id_exercicio integer not null primary key auto_increment,
    descricao varchar(50) not null,
    grupo_muscular varchar(20) not null,
    id_aparelho integer not null
);

create table aparelhos(
    id_aparelho	integer not null primary key auto_increment,
    nome varchar(50) not null
);

create table fichas(
    id_aluno integer not null,
    id_exercicio integer not null,
    dia_semana varchar(20) not null,
    série varchar(40) not null
);

alter table telefones add foreign key (id_aluno) references alunos(id_aluno);
alter table exercicios add foreign key (id_aparelho) references aparelhos(id_aparelho);
alter table fichas add foreign key (id_aluno) references alunos(id_aluno);
alter table fichas add foreign key (id_exercicio) references exercicios(id_exercicio);

describe alunos;
describe telefones;
describe aparelhos;
describe exercicios;
describe fichas;

show tables;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/BCD/AULA05/csv/academia/telefones.csv'
LOAD DATA INFILE 'C:/Users/oryc1/Desktop/SENAI/2DES/BCD/AULA05/csv/academia/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/BCD/AULA05/csv/academia/alunos.csv'
LOAD DATA INFILE 'C:/Users/oryc1/Desktop/SENAI/2DES/BCD/AULA05/csv/academia/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from alunos;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/BCD/AULA05/csv/academia/exercicios.csv'
LOAD DATA INFILE 'C:/Users/oryc1/Desktop/SENAI/2DES/BCD/AULA05/csv/academia/exercicios.csv'
INTO TABLE exercicios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from exercicios;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/BCD/AULA05/csv/academia/aparelhos.csv'
LOAD DATA INFILE 'C:/Users/oryc1/Desktop/SENAI/2DES/BCD/AULA05/csv/academia/aparelhos.csv'
INTO TABLE aparelhos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from aparelhos;

-- LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/BCD/AULA05/csv/academia/fichas.csv'
LOAD DATA INFILE 'C:/Users/oryc1/Desktop/SENAI/2DES/BCD/AULA05/csv/academia/fichas.csv'
INTO TABLE fichas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from fichas;