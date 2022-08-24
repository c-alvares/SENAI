drop database if exists entregas;
create database entregas charset=UTF8 collate utf8_general_ci;
use entregas;

create table clientes(
    id_cliente integer not null primary key auto_increment,
    cpf varchar(11) not null,
    nome varchar(50) not null,
    cep varchar(8) not null,
    numero varchar(6) not null,
    complemento varchar(20)
);

create table telefones(
    id_cliente integer not null,
    numero varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

create table entregadores(
    id_entregador integer not null primary key auto_increment,
    nome varchar(50) not null,
    veiculo varchar(20) not null
);

create table produtos(
    id_produto integer not null primary key auto_increment,
    nome varchar(50) not null,
    preco_unitario float(8,2) not null
);

create table pedidos(
    id_cliente integer not null,
    id_pedido integer not null primary key auto_increment,
    id_intregador integer not null,
    data date not null,
    hora_pedido time,
    hora_entrega time,
    hora_fim time,
    foreign key (id_cliente) references clientes(id_cliente),
    foreign key (id_intregador) references entregadores(id_entregador)
);

create table itens(
    id_pedido integer not null,
    quantidade integer not null,
    id_produto integer not null,
    foreign key (id_pedido) references pedidos(id_pedido),
    foreign key (id_produto) references produtos(id_produto)
);

describe clientes;
describe telefones;
describe entregadores;
describe produtos;
describe pedidos;
describe itens;

show tables;

LOAD DATA INFILE 'C:/Users/oryc1/OneDrive/Área de Trabalho/SENAI/2DES/BCD/AULA05/csv/entregas/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from clientes;

LOAD DATA INFILE 'C:/Users/oryc1/OneDrive/Área de Trabalho/SENAI/2DES/BCD/AULA05/csv/entregas/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

LOAD DATA INFILE 'C:/Users/oryc1/OneDrive/Área de Trabalho/SENAI/2DES/BCD/AULA05/csv/entregas/entregadores.csv'
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from entregadores;

LOAD DATA INFILE 'C:/Users/oryc1/OneDrive/Área de Trabalho/SENAI/2DES/BCD/AULA05/csv/entregas/produtos.csv'
INTO TABLE produtos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from produtos;

LOAD DATA INFILE 'C:/Users/oryc1/OneDrive/Área de Trabalho/SENAI/2DES/BCD/AULA05/csv/entregas/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from pedidos;

LOAD DATA INFILE 'C:/Users/oryc1/OneDrive/Área de Trabalho/SENAI/2DES/BCD/AULA05/csv/entregas/itens.csv'
INTO TABLE itens
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from itens;