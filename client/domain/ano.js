class Ano {
  constructor() {
    this.meses = [];
  }

  adicionarMes(mes) {
    this.meses.push(mes);
  }

  adicionarLancamento(nomeDoMes, lancameto) {
    for (const mes of this.meses) {
      if (mes.nome === nomeDoMes) {
        mes.adicionarLancamento(lancameto);
        break;
      }
    }
  }

  deletarLancamento(mes, lancamento) {
    mes.lancamentos.splice(mes.lancamentos.indexOf(lancamento), 1);
  }

  calcularSaldo() {
    let saldoInicial = 0;
    for (const mes of this.meses) {
      mes.saldoInicial = saldoInicial;
      mes.calcularSaldo();
      saldoInicial = mes.totalizador.saldo;
    }
  }
}
