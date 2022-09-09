drop database if exists locadora;
create database locadora charset=utf8 collate utf8_general_ci;
use locadora;

create table usuarios (
    codigo_cli integer primary key not null auto_increment unique,
    nome varchar(60) not null,
    endereco varchar(255) not null,
    telefone varchar(15) not null
);

describe usuarios;

create table filmes (
    codigo_filme integer primary key not null auto_increment unique,
    nome varchar(60) not null,
    genero varchar(40) not null
);

describe filmes;

create table locacao (
    id integer primary key auto_increment,
    codigo_cli integer not null,
    codigo_filme integer not null,
    data_locacao date not null,
    data_devolucao date
);

describe locacao;

alter table locacao add foreign key (codigo_cli) references usuarios(codigo_cli);
alter table locacao add foreign key (codigo_filme) references filmes(codigo_filme);

show tables;

load data infile 'C:/Users/Desenvolvimento/Desktop/prova/docs/dados/clientes.csv'
into table usuarios
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/Users/Desenvolvimento/Desktop/prova/docs/dados/filmes.csv'
into table filmes
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/Users/Desenvolvimento/Desktop/prova/docs/dados/locacoes.csv'
into table locacao
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

select * from usuarios;
select * from filmes;
select * from locacao;

create view vw_locados as 
select u.nome, u.telefon, f.nome, l.data_locacao as usuario from usuarios u
inner join locacao l on u.nome = ;
