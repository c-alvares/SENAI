-- Transações
-- Utilizaremos o banco de dados "pizzaria" estudado em aulas anteriores para esta demonstração
use pizzaria;
show tables;

-- MySQL por padrão a propriedade/metadado @@autocommit é definido como true/1
select @@autocommit;
set @@autocommit = off;
select @@autocommit;

-- Vamos criar uma nova tabela apenas para teste
create table dados_clientes
select cliente_id, nome, logradouro
from clientes;

-- Visualizar o conteúdo da nova tabela
select * from dados_clientes;
describe dados_clientes;

-- Configurar o cliente_id como chave primária (alter table {add, drop ou modify})
alter table dados_clientes modify cliente_id integer not null primary key auto_increment;

-- Conferir se a alteração se efetivou
describe dados_clientes;

-- Exemplo de Transação com rollback
start transaction;
	delete from dados_clientes;
	insert into dados_clientes values
		(101,"Joaquin da silva","Rua doa Alecrins"),
		(102,"Susana Aguiar","Praça Machado de Assis");
	select * from dados_clientes;
rollback;
-- Ver se realmente as altereções não foram efetivamente aplicadas
select * from dados_clientes;

-- Exemplo de Transação com Commit
start transaction;
	delete from dados_clientes;
	insert into dados_clientes values
		(101,"Joaquin da silva","Rua doa Alecrins"),
		(102,"Susana Aguiar","Praça Machado de Assis");
	select * from dados_clientes;
commit;
-- Ver se realmente as altereções foram efetivamente aplicadas
select * from dados_clientes;

-- Exemplo de uma transação com commit ou rollback em um procedimento armazenado
drop procedure if exists insere_dados;
delimiter //
create procedure insere_dados()
	begin
	declare erro_sql tinyint default false;
	declare continue handler for sqlexception set erro_sql = true;
	start transaction;
		insert into dados_clientes values (103, "Mariana Oliveira", "Av. Getulio Vargas");
		insert into dados_clientes values (104, "Paola Gimenes", "Av. Getulio Vargas");
		insert into dados_clientes values (104, "Mariana Martins", "Av. Getulio Vargas");
		insert into dados_clientes values (105, "Paloma Vieira", "Av. Getulio Vargas");
		if erro_sql = false then
			commit;
			select 'Transação efetivada com sucesso' as Resultado;
		else
			rollback;
			select 'Erro na transação' as Resultado;
		end if;
end//
delimiter ;

-- Chamar o procedimento armazenado
call insere_dados();
-- Verificar se houve altarações;
select * from dados_clientes;

-- Corrigindo o erro no procedimento armazenado e executando novamente
drop procedure if exists insere_dados;
delimiter //
create procedure insere_dados()
	begin
	declare erro_sql tinyint default false;
	declare continue handler for sqlexception set erro_sql = true;
	start transaction;
		insert into dados_clientes values (103, "Mariana Oliveira", "Av. Getulio Vargas");
		insert into dados_clientes values (104, "Paola Gimenes", "Av. Getulio Vargas");
		insert into dados_clientes values (105, "Mariana Martins", "Av. Getulio Vargas");
		insert into dados_clientes values (106, "Paloma Vieira", "Av. Getulio Vargas");
		if erro_sql = false then
			commit;
			select 'Transação efetivada com sucesso' as Resultado;
		else
			rollback;
			select 'Erro na transação' as Resultado;
		end if;
end//
delimiter ;

-- Chamar o procedimento armazenado
call insere_dados();
-- Verificar se houve altarações;
select * from dados_clientes;



drop procedure if exists insere_pedidos;
delimiter //
create procedure insere_pedidos()
	begin
	declare erro_sql tinyint default false;
	declare continue handler for sqlexception set erro_sql = true;
	start transaction;
		insert into pedidos values (default, "227", curdate(), curtime(), NULL);
		insert into itens_pedido values (last_insert_id(), 111, 1, (select valor from Pizza where pizza_id = 111));
		insert into itens_pedido values (last_insert_id(), 12, 2, (select valor from Pizzas where pizza_id = 12));
		insert into itens_pedido values (last_insert_id(), 34, 1, (select valor from Pizzas where pizza_id = 34));
		update pedidos 
			set valor = (select sum(quantidade * valor) from itens_pedido where pedido_id = last_insert_id())
			where pedido_id = last_insert_id();
		if erro_sql = false then
			commit;
			select 'Transação efetivada com sucesso' as Resultado;
		else
			rollback;
			select 'Erro na transação' as Resultado;
		end if;
end//
delimiter ; 


insert into itens_pedido values (null, 10, 1, (select valor from Pizzas where pizza_id = 111) * quantidade);
insert into pedidos values (default, "247", curdate(), curtime(), ((select valor from pizzas where pizza_id = 10) * quantidade));
update itens_pedido set pedido_id = (select pedido_id from pedidos order by pedido_id desc limit 1);

insert into pedidos values (default, "227", curdate(), curtime(), NULL);
insert into itens_pedido values (last_insert_id(), 10, 1, (select valor from Pizza where pizza_id = 111) * quantidade);
update pedidos set valor = (select sum(quantidade * valor) from itens_pedido where pedido_id = last_insert_id()) where pedido_id = last_insert_id();