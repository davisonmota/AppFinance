const janeiro = new Mes("janeiro");
janeiro.adicionarLancameto(new Lancamento("Salário", "receita", 3000));
janeiro.adicionarLancameto(new Lancamento("Aluguel", "despesa", 2000));
janeiro.adicionarLancameto(new Lancamento("Conta de Luz", "despesa", 200));
janeiro.adicionarLancameto(new Lancamento("Internet", "despesa", 100));
janeiro.adicionarLancameto(new Lancamento("Academia", "despesa", 100));
janeiro.adicionarLancameto(new Lancamento("Transporte", "despesa", 100));
janeiro.adicionarLancameto(new Lancamento("Lazer", "despesa", 300));
janeiro.adicionarLancameto(new Lancamento("Alimentação", "despesa", 900));
janeiro.adicionarLancameto(new Lancamento("Farmácia", "despesa", 100));

const fevereiro = new Mes("fevereiro");
fevereiro.adicionarLancameto(new Lancamento("Salário", "receita", 3000));
fevereiro.adicionarLancameto(new Lancamento("Aluguel", "despesa", 1200));
fevereiro.adicionarLancameto(new Lancamento("Conta de Luz", "despesa", 100));
fevereiro.adicionarLancameto(new Lancamento("Conta de Água", "despesa", 100));
fevereiro.adicionarLancameto(new Lancamento("Internet", "despesa", 100));
fevereiro.adicionarLancameto(new Lancamento("Academia", "despesa", 100));
fevereiro.adicionarLancameto(new Lancamento("Transporte", "despesa", 100));
fevereiro.adicionarLancameto(new Lancamento("Lazer", "despesa", 300));
fevereiro.adicionarLancameto(new Lancamento("Alimentação", "despesa", 900));
fevereiro.adicionarLancameto(new Lancamento("Farmácia", "despesa", 100));

const marco = new Mes("marco");
marco.adicionarLancameto(new Lancamento("Salário", "receita", 3000));
marco.adicionarLancameto(new Lancamento("Hora Extra", "receita", 500));
marco.adicionarLancameto(new Lancamento("Aluguel", "despesa", 600));
marco.adicionarLancameto(new Lancamento("Conta de Luz", "despesa", 100));
marco.adicionarLancameto(new Lancamento("Conta de Água", "despesa", 100));
marco.adicionarLancameto(new Lancamento("Internet", "despesa", 100));
marco.adicionarLancameto(new Lancamento("Academia", "despesa", 100));
marco.adicionarLancameto(new Lancamento("Transporte", "despesa", 100));
marco.adicionarLancameto(new Lancamento("Lazer", "despesa", 300));
marco.adicionarLancameto(new Lancamento("Alimentação", "despesa", 900));
marco.adicionarLancameto(new Lancamento("Farmácia", "despesa", 100));

const ano = new Ano();
ano.adicionarMes(janeiro);
ano.adicionarMes(fevereiro);
ano.adicionarMes(marco);
ano.calcularSaldo();

janeiro.adicionarLancameto(new Lancamento("Conta de Água", "despesa", 100));
ano.calcularSaldo();

console.log(ano.meses);
