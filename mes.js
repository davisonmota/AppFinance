class Mes {
  constructor(nome, saldoInicial = 0) {
    if (nome === "") throw new Error("Mês Inválido: O nome é obrigatório.");
    this.nome = nome;
    this.lancamentos = [];
    this.totalizador = {
      saldoInicial,
      saldo: saldoInicial,
      juros: 0,
      rendimentos: 0,
      receitas: 0,
      despesas: 0,
      distribuicaoDasDespesas: [],
      distribuicaoDasDespesasPeloTotalDasReceitas: [],
      distribuicaoDasReceitas: [],
    };
  }

  adicionarLancameto(lancamento) {
    const objetoEstaVazio = Object.keys(lancamento).length === 0;
    if (typeof lancamento !== "object" || objetoEstaVazio)
      throw Error("Lançamento Inválido.");
    this.lancamentos.push(lancamento);
  }

  calcularSaldo() {
    this.apurarReceitas();
    this.apurarDespesas();
    this.distribuirDespesas();
    this.distribuirReceitas();
    this.distribuirDespesasPeloTotalDasReceitas();
    this.apurarJuros();
    this.apurarRendimentos();
  }

  apurarReceitas() {
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === "receita") {
        this.totalizador.saldo += lancamento.valor;
        this.totalizador.receitas += lancamento.valor;
      }
    }
  }

  apurarDespesas() {
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === "despesa") {
        this.totalizador.saldo -= lancamento.valor;
        this.totalizador.despesas += lancamento.valor;
      }
    }
  }

  distribuirDespesas() {
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === "despesa") {
        const percentualDespesa = arredondar(
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
      if (lancamento.tipo === "receita") {
        const percentualReceita = arredondar(
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
      if (lancamento.tipo === "despesa") {
        const percentualDespesaPeloTotalDasReceita = arredondar(
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
    this.totalizador.juros = arredondar(debito * taxaDeJuros);
  }

  apurarJuros() {
    if (this.totalizador.saldo < 0) {
      this.calcularJuros(this.totalizador.saldo);
      this.totalizador.saldo = arredondar(
        this.totalizador.saldo + this.totalizador.juros
      );
    }
  }

  calcularRendimentos() {
    const taxadeRendimento = 0.005;
    this.totalizador.rendimentos = arredondar(
      this.totalizador.saldo * taxadeRendimento
    );
  }

  apurarRendimentos() {
    if (this.totalizador.saldo > 0) {
      this.calcularRendimentos(this.totalizador.saldo);
      this.totalizador.saldo = arredondar(
        this.totalizador.saldo + this.totalizador.rendimentos
      );
    }
  }
}
