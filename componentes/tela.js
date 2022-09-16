class Tela {
  constructor() {
    const janeiro = new Mes("Janeiro");
    janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
    janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 2000));
    janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));

    const fevereiro = new Mes("Fevereiro");
    fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
    fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200));
    fevereiro.adicionarLancamento(
      new Lancamento("Conta de Luz", "despesa", 100)
    );
    fevereiro.adicionarLancamento(
      new Lancamento("Conta de Água", "despesa", 100)
    );

    const marco = new Mes("Marco");
    marco.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
    marco.adicionarLancamento(new Lancamento("Hora Extra", "receita", 500));
    marco.adicionarLancamento(new Lancamento("Aluguel", "despesa", 600));

    const ano = new Ano();
    ano.adicionarMes(janeiro);
    ano.adicionarMes(fevereiro);
    ano.adicionarMes(marco);
    ano.calcularSaldo();
    this.ano = ano;
  }

  formatarDinheiro(valor) {
    return new Intl.NumberFormat("pt-br", {
      currency: "BRL",
      style: "currency",
    }).format(valor);
  }

  adicionarLancamento() {
    const mes = document.getElementById("mes");
    const tipo = document.getElementById("tipo");
    const categoria = document.getElementById("categoria");
    const valor = document.getElementById("valor");
    this.ano.adicionarLancamento(
      mes.value,
      new Lancamento(categoria.value, tipo.value, Number(valor.value))
    );
    this.ano.calcularSaldo();
    this.renderizar();
    mes.value = this.ano.meses[0].nome;
    tipo.value = "receita";
    categoria.value = "";
    valor.value = "";
  }

  renderizar() {
    document.getElementById("app").remove();
    const app = new Div("app");

    const formularioLancamento = new Div("formulario-lancamento");
    const mesSelect = new Select("mes");
    for (const mes of this.ano.meses) {
      mesSelect.adicionarOption(mes.nome);
    }
    formularioLancamento.adicionarElementoFilho(mesSelect.elemento);
    const tipoSelect = new Select("tipo");
    tipoSelect.adicionarOption("receita");
    tipoSelect.adicionarOption("despesa");
    const categoriaInputText = new Input("text", "Categoria", "categoria");
    const valorInputNumber = new Input("number", "Valor", "valor");
    const botao = new Button(
      "botaoAdicionarLancamento",
      "Adicionar lançamento"
    );
    formularioLancamento.adicionarElementoFilho(tipoSelect.elemento);
    formularioLancamento.adicionarElementoFilho(categoriaInputText.elemento);
    formularioLancamento.adicionarElementoFilho(valorInputNumber.elemento);
    formularioLancamento.adicionarElementoFilho(botao.elemento);
    botao.addListener(() => {
      this.adicionarLancamento();
    });
    app.adicionarElementoFilho(formularioLancamento.elemento);

    for (const mes of this.ano.meses) {
      const nomeDoMes = new H2(mes.nome);
      app.adicionarElementoFilho(nomeDoMes.elemento);
      const tabelaLancamentos = new Tabela("tabela-lancamentos");
      tabelaLancamentos.adicionarLinha("th", ["Categoria", "Valor"]);
      for (const lancamento of mes.lancamentos) {
        tabelaLancamentos.adicionarLinha("td", [
          lancamento.categoria,
          this.formatarDinheiro(lancamento.getValorString()),
        ]);
      }
      tabelaLancamentos.adicionarLinha("th", [
        "Receitas",
        this.formatarDinheiro(mes.totalizador.receitas),
      ]);
      tabelaLancamentos.adicionarLinha("th", [
        "Despesas",
        this.formatarDinheiro(mes.totalizador.despesas),
      ]);
      tabelaLancamentos.adicionarLinha("th", [
        "Juros",
        this.formatarDinheiro(mes.totalizador.juros),
      ]);
      tabelaLancamentos.adicionarLinha("th", [
        "Rendimentos",
        this.formatarDinheiro(mes.totalizador.rendimentos),
      ]);
      tabelaLancamentos.adicionarLinha("th", [
        "Saldo",
        this.formatarDinheiro(mes.totalizador.saldo),
      ]);
      app.adicionarElementoFilho(tabelaLancamentos.elemento);
    }
    const [body] = document.getElementsByTagName("body");
    body.appendChild(app.elemento);
    console.log(body);
    console.log(this.ano.meses);
  }
}
