-- Exercício 01
drop database if exists exercicio1;
create database exercicio1 charset=UTF8 collate=utf8_general_ci;
use exercicio1;

create table clientes(
    id_cliente integer not null primary key auto_increment,
    nome varchar(30) not null,
    nascimento varchar(10) not null,
    sexo varchar(1) not null,
    peso decimal(3,2)
);
create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;
describe telefones;
show tables;

-- Exercício 02
drop database if exists exercicio2;
create database exercicio2 charset=UTF8 collate=utf8_general_ci;
use exercicio2;

create table clientes(
    id_cliente integer not null primary key auto_increment,
    nome varchar(30) not null,
    nascimento date not null,
    sexo varchar(1) not null,
    peso decimal(3,2)
);
create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);
create table exercicio(
    id_exercicio integer not null primary key auto_increment,
    descricao varchar(30) not null,
    grupo_muscular varchar(15) not null,

);
create table aparelhos(
    id_aparelho integer not null primary key auto_increment,
    aparelho varchar(30) not null,
    foreign key (id_aparelho) references exercicio(id_aparelho)
);
create table ficha_exercicios(
    id_cliente integer not nullt primary key auto_increment,
    id_exercicio integer not nullt foreign key auto_increment,
    dia_semana varchar(20) not null,
    serie varchar(30) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;
describe telefones;
describe exercicio;
describe aparelhos;
describe ficha_exercicios;
show tables;

-- Exercício 03
drop database if exists exercicio3;
create database exercicio3 charset=UTF8 collate=utf8_general_ci;
use exercicio3;

create table motorista(
    cpf integer not null primary key auto_increment,
    nome_motorista varchar(30) not null,
);
create table telefones(
    cpf integer not null,
    telefone varchar(15) not null,
    foreign key (cpf) references motorista(cpf)
);
create table exercicio(
    id_exercicio integer not null primary key auto_increment,
    descricao varchar(30) not null,
    grupo_muscular varchar(15) not null,
    id_aparelho integer not null foreign key
);
create table aparelhos(
    id_aparelho integer not null primary key auto_increment,
    aparelho varchar(30) not null,
    foreign key (id_aparelho) references exercicio(id_aparelho)
);
create table ficha_exercicios(
    id integer not nullt primary key auto_increment,
    id_exercicio integer not nullt foreign key auto_increment,
    dia_semana varchar(20) not null,
    serie varchar(30) not null,
    foreign key (id) references clientes(id)
);