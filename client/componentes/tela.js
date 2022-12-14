class Tela {
  constructor(lancamentoServece) {
    this.lancamentoServece = lancamentoServece;
    this.init();
  }

  async init() {
    const lancamentos = await this.lancamentoServece.getLancamento();
    this.ano = new Ano();
    for (const lancamento of lancamentos) {
      this.ano.adicionarLancamento(
        lancamento.mes,
        new Lancamento(
          lancamento.categoria,
          lancamento.tipo,
          lancamento.valor,
          lancamento.id
        )
      );
    }
    this.ano.calcularSaldo();
    this.renderizar();
  }

  formatarDinheiro(valor) {
    return new Intl.NumberFormat('pt-br', {
      currency: 'BRL',
      style: 'currency',
    }).format(valor);
  }

  adicionarLancamento() {
    const mes = document.getElementById('mes');
    const tipo = document.getElementById('tipo');
    const categoria = document.getElementById('categoria');
    const valor = document.getElementById('valor');
    this.ano.adicionarLancamento(
      mes.value,
      new Lancamento(categoria.value, tipo.value, Number(valor.value))
    );
    const lancamento = {
      mes: mes.value,
      categoria: categoria.value,
      tipo: tipo.value,
      valor: Number(valor.value),
    };
    this.lancamentoServece.seveLancamento(lancamento);
    this.renderizar();
    this.init();
  }

  deletarLancamento(mes, lancamento) {
    this.lancamentoServece.deleteLancamento(lancamento.id);
    this.ano.deletarLancamento(mes, lancamento);
    this.ano.calcularSaldo();
    this.renderizar();
  }

  renderizar() {
    document.getElementById('app').remove();
    const app = new Div('app');

    const formularioLancamento = new Div('formulario-lancamento');
    const mesSelect = new Select('mes');
    for (const mes of this.ano.meses) {
      mesSelect.adicionarOption(mes.nome);
    }
    formularioLancamento.adicionarElementoFilho(mesSelect.elemento);
    const tipoSelect = new Select('tipo');
    tipoSelect.adicionarOption('receita');
    tipoSelect.adicionarOption('despesa');
    const categoriaInputText = new Input('text', 'Categoria', 'categoria');
    const valorInputNumber = new Input('number', 'Valor', 'valor');
    const botao = new Button(
      'botaoAdicionarLancamento',
      'Adicionar lan??amento'
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
      const tabelaLancamentos = new Tabela('tabela-lancamentos');
      tabelaLancamentos.adicionarLinha('th', ['Categoria', 'Valor']);
      for (const lancamento of mes.lancamentos) {
        const button = new Button('delete-lancamento', 'Deletar');
        button.addListener(() => {
          this.deletarLancamento(mes, lancamento);
        });
        tabelaLancamentos.adicionarLinha(
          'td',
          [
            lancamento.categoria,
            this.formatarDinheiro(lancamento.getValorString()),
          ],
          [button]
        );
      }
      tabelaLancamentos.adicionarLinha('th', [
        'Receitas',
        this.formatarDinheiro(mes.totalizador.receitas),
      ]);
      tabelaLancamentos.adicionarLinha('th', [
        'Despesas',
        this.formatarDinheiro(mes.totalizador.despesas),
      ]);
      tabelaLancamentos.adicionarLinha('th', [
        'Juros',
        this.formatarDinheiro(mes.totalizador.juros),
      ]);
      tabelaLancamentos.adicionarLinha('th', [
        'Rendimentos',
        this.formatarDinheiro(mes.totalizador.rendimentos),
      ]);
      tabelaLancamentos.adicionarLinha('th', [
        'Saldo',
        this.formatarDinheiro(mes.totalizador.saldo),
      ]);
      app.adicionarElementoFilho(tabelaLancamentos.elemento);
    }
    const [body] = document.getElementsByTagName('body');
    body.appendChild(app.elemento);
  }
}
