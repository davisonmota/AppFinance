const janeiro = new Mes("Janeiro");
janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 2000));
janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));

const fevereiro = new Mes("Fevereiro");
fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200));
fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 100));
fevereiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));

const marco = new Mes("Marco");
marco.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
marco.adicionarLancamento(new Lancamento("Hora Extra", "receita", 500));
marco.adicionarLancamento(new Lancamento("Aluguel", "despesa", 600));

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
  if (text !== "" && text !== undefined && text !== null && text !== NaN) {
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
    const tabelaLancamento = new Tabela("tabela-lancamentos");
    tabelaLancamento.adicionarLinha("th", ["Categoria", "Valor"]);
    for (const lancamento of mes.lancamentos) {
      tabelaLancamento.adicionarLinha("td", [
        lancamento.categoria,
        formatarDinheiro(lancamento.getValorString()),
      ]);
    }
    tabelaLancamento.adicionarLinha("th", [
      "Receitas",
      formatarDinheiro(mes.totalizador.receitas),
    ]);
    tabelaLancamento.adicionarLinha("th", [
      "Despesas",
      formatarDinheiro(mes.totalizador.despesas),
    ]);
    tabelaLancamento.adicionarLinha("th", [
      "Juros",
      formatarDinheiro(mes.totalizador.juros),
    ]);
    tabelaLancamento.adicionarLinha("th", [
      "Rendimentos",
      formatarDinheiro(mes.totalizador.rendimentos),
    ]);
    tabelaLancamento.adicionarLinha("th", [
      "Total",
      formatarDinheiro(mes.totalizador.saldo),
    ]);
    painel.appendChild(tabelaLancamento.elemento);
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
  mes.value = ano.meses[0].nome;
  tipo.value = "receita";
  categoria.value = "";
  valor.value = "";
}

const botaoAdicionarLancamento = document.getElementById(
  "botaoAdicionarLancamento"
);
botaoAdicionarLancamento.addEventListener("click", adicionarLancamento);

const mesSelect = document.getElementById("mes");
for (const mes of ano.meses) {
  const option = document.createElement("option");
  option.text = mes.nome;
  mesSelect.add(option);
}
