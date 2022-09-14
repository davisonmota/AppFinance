const janeiro = new Mes("Janeiro");
janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 2000));
janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));
janeiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));
janeiro.adicionarLancamento(new Lancamento("Academia", "despesa", 100));
janeiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 100));
janeiro.adicionarLancamento(new Lancamento("Lazer", "despesa", 300));
janeiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 900));
janeiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 100));

const fevereiro = new Mes("Fevereiro");
fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200));
fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento("Academia", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento("Lazer", "despesa", 300));
fevereiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 900));
fevereiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 100));

const marco = new Mes("Marco");
marco.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
marco.adicionarLancamento(new Lancamento("Hora Extra", "receita", 500));
marco.adicionarLancamento(new Lancamento("Aluguel", "despesa", 600));
marco.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 100));
marco.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
marco.adicionarLancamento(new Lancamento("Internet", "despesa", 100));
marco.adicionarLancamento(new Lancamento("Academia", "despesa", 100));
marco.adicionarLancamento(new Lancamento("Transporte", "despesa", 100));
marco.adicionarLancamento(new Lancamento("Lazer", "despesa", 300));
marco.adicionarLancamento(new Lancamento("Alimentação", "despesa", 900));
marco.adicionarLancamento(new Lancamento("Farmácia", "despesa", 100));

const ano = new Ano();
ano.adicionarMes(janeiro);
ano.adicionarMes(fevereiro);
ano.adicionarMes(marco);
ano.calcularSaldo();

janeiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
ano.calcularSaldo();
console.log(ano.meses);

function addElement(parent, elementType, text) {
  const element = document.createElement(elementType);
  if (text) {
    element.innerText = text;
  }
  parent.appendChild(element);
}

function renderizar() {
  const app = document.getElementById("app");
  if (app.firstChild) {
    app.firstChild.remove();
  }
  const painel = document.createElement("div");
  for (const mes of ano.meses) {
    addElement(painel, "h2", mes.nome);
    for (const lancamento of mes.lancamentos) {
      const detalhesLancamento = `${lancamento.tipo} - ${lancamento.categoria}: ${lancamento.valor}`;
      addElement(painel, "p", detalhesLancamento);
    }
    const detalhesDoSaldo = `Saldo: ${mes.totalizador.saldo}`;
    addElement(painel, "p", detalhesDoSaldo);
    addElement(painel, "hr");
  }
  app.appendChild(painel);
}

renderizar();

function adicionarLancamento() {
  const mes = document.getElementById("mes");
  const tipo = document.getElementById("tipo");
  const categoria = document.getElementById("categoria");
  const valor = document.getElementById("valor");
  ano.adicionarLancamento(
    mes.value,
    new Lancamento(categoria.value, tipo.value, Number(valor.value))
  );
  ano.calcularSaldo();
  renderizar();
  mes.value = "";
  tipo.value = "";
  categoria.value = "";
  valor.value = "";
}

const botaoAdicionarLancamento = document.getElementById(
  "botaoAdicionarLancamento"
);
botaoAdicionarLancamento.addEventListener("click", adicionarLancamento);
