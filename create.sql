create schema financas_pessoais;

create table financas_pessoais.lancamento(
  id_lancamento serial primary key,
  mes text,
  categoria text,
  tipo text,
  valor numeric
);

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('janeiro', 'Salário', 'receita', 3000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('janeiro', 'Aluguel', 'despesa', 2000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('janeiro', 'Conta de Luz', 'despesa', 200);

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('fevereiro', 'Salário', 'receita', 3000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('fevereiro', 'Aluguel', 'despesa', 1200);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('fevereiro', 'Conta de Luz', 'despesa', 100);

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('marco', 'Salário', 'receita', 3000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('marco', 'Aluguel', 'despesa', 600);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values ('marco', 'YT', 'receita', 600);