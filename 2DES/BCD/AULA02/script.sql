-- Exclui o banco se existir e cia um novo com padrão utf8 de caracteres e acessa.
drop database if exists pedidos; 
create database pedidos charset=UTF8 collate utf8_general_ci;
use pedidos;
-- DDL Criação de estrutura do Banco de dados
create table clientes(
    id_cliente integer not null primary key auto_increment,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    endereco varchar(100) not null
);
create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);
create table pedidos(
    num_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    data timestamp not null,
    valor decimal(8,2) not null, -- 999999,99
    descricao varchar(50) not null,
    quantidade integer(4) not null, -- Até 9999 
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;
describe telefones;
describe pedidos;
show tables;

-- DML Alimentar o banco de dados com dados de teste
insert into clientes values
(null,"Jorge","Silva","Rua Coisa Bueno - Jaguariúna - SP"),
(null,"Vanessa","Silva","Rua Amâncio Bueno - Jaguariúna - SP"),
(null,"Marcelo","Souza","Rua Dois - Pedreira - SP"),
(null,"Juliana","Tavares","Rua Bueno Bueno - Jaguariúna - SP");

insert into telefones values
(1,"19-98445-5649"),
(1,"19-91089-8290"),
(2,"19-97263-5164"),
(2,"19-97892-1298"),
(3,"19-94467-5111");

insert into pedidos values
(null, 1,null,10,"Pastel de Frango",3),
(null, 1,null,7,"Suco de Laranja",2),
(null, 2,null,10,"Pastel de Preseunto",1),
(null, 1,null,10,"Pastel de Carne",4),
(null, 4,null,10,"Pastel de Palmito",2),
(null, 3,null,10,"Pastel de Queijo",5),
(null, 1,null,13,"Pastel de Camarão",1),
(null, 4,null,5,"Coxinha de Frango",2),
(null, 2,null,5,"Guaraná Antartica",3),
(null, 1,null,10,"Pastel de Queijo",2);

select * from clientes;
select * from telefones;
select * from pedidos;
