drop database if exists Patrimonio;
create database Patrimonio charset=UTF8 collate utf8_general_ci;
use Patrimonio;

create table itens(
    ni numeric(6) not null,
    aquisicao timestamp not null,
    denominacao varchar(100) not null,
    valor numeric(10,2),
    img varchar(200) default 'default.png',
    constraint pk_itens primary key (ni)
);

describe itens;

-- DML
load data infile 'C:/Users/Desenvolvimento/Desktop/SENAI/2DES/PWBE/AULA09/docs/bd/itens.csv'
into table itens
fields terminated by ','
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

select * from itens;