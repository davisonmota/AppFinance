class Mes {
  constructor(nome) {
    if (nome === '') throw new Error('Mês Inválido: O nome é obrigatório.');
    this.nome = nome;
    this.saldoInicial = 0;
    this.lancamentos = [];
    this.totalizador = {
      saldo: 0,
      juros: 0,
      rendimentos: 0,
      receitas: 0,
      despesas: 0,
      distribuicaoDasDespesas: [],
      distribuicaoDasDespesasPeloTotalDasReceitas: [],
      distribuicaoDasReceitas: [],
    };
  }

  adicionarLancamento(lancamento) {
    this.lancamentos.push(lancamento);
  }

  calcularSaldo() {
    this.totalizador = {
      saldo: 0,
      juros: 0,
      rendimentos: 0,
      receitas: 0,
      despesas: 0,
      distribuicaoDasDespesas: [],
      distribuicaoDasDespesasPeloTotalDasReceitas: [],
      distribuicaoDasReceitas: [],
    };
    this.totalizador.saldo = this.saldoInicial;
    this.apurarReceitas();
    this.apurarDespesas();
    this.distribuirDespesas();
    this.distribuirReceitas();
    this.distribuirDespesasPeloTotalDasReceitas();
    this.apurarJuros();
    this.apurarRendimentos();
  }

  arredondar(valor) {
    return Math.round(valor * 100) / 100;
  }

  apurarReceitas() {
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === 'receita') {
        this.totalizador.saldo += lancamento.valor;
        this.totalizador.receitas += lancamento.valor;
      }
    }
  }

  apurarDespesas() {
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === 'despesa') {
        this.totalizador.saldo -= lancamento.valor;
        this.totalizador.despesas += lancamento.valor;
      }
    }
  }

  distribuirDespesas() {
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === 'despesa') {
        const percentualDespesa = this.arredondar(
          (lancamento.valor / this.totalizador.despesas) * 100
        );
        this.totalizador.distribuicaoDasDespesas.push({
          categoria: lancamento.categoria,
          percentualEmRelacaoAoTotalDasDespesas: percentualDespesa,
        });
      }
    }
  }

  distribuirReceitas() {
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === 'receita') {
        const percentualReceita = this.arredondar(
          (lancamento.valor / this.totalizador.receitas) * 100
        );
        this.totalizador.distribuicaoDasReceitas.push({
          categoria: lancamento.categoria,
          percentualReceita,
        });
      }
    }
  }

  distribuirDespesasPeloTotalDasReceitas() {
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === 'despesa') {
        const percentualDespesaPeloTotalDasReceita = this.arredondar(
          (lancamento.valor / this.totalizador.receitas) * 100
        );
        this.totalizador.distribuicaoDasDespesasPeloTotalDasReceitas.push({
          categoria: lancamento.categoria,
          percentualDespesaPeloTotalDasReceita,
        });
      }
    }
  }

  calcularJuros() {
    const taxaDeJuros = 0.1;
    const debito = this.totalizador.saldo;
    this.totalizador.juros = this.arredondar(debito * taxaDeJuros);
  }

  apurarJuros() {
    if (this.totalizador.saldo < 0) {
      this.calcularJuros(this.totalizador.saldo);
      this.totalizador.saldo = this.arredondar(
        this.totalizador.saldo + this.totalizador.juros
      );
    }
  }

  calcularRendimentos() {
    const taxaDeRendimento = 0.005;
    this.totalizador.rendimentos = this.arredondar(
      this.totalizador.saldo * taxaDeRendimento
    );
  }

  apurarRendimentos() {
    if (this.totalizador.saldo > 0) {
      this.calcularRendimentos(this.totalizador.saldo);
      this.totalizador.saldo = this.arredondar(
        this.totalizador.saldo + this.totalizador.rendimentos
      );
    }
  }
}
