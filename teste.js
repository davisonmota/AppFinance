console.log(
  "Janeiro:\n",
  `Saldo inicial deve ser ZERO: ${janeiro.saldoInicial}, ${
    janeiro.saldoInicial === 0
  }\n`,
  `Receita deve ser 3000: ${janeiro.totalizador.receitas}, ${
    janeiro.totalizador.receitas === 3000
  }\n`,
  `Despesas deve ser 3900: ${janeiro.totalizador.despesas}, ${
    janeiro.totalizador.despesas === 3900
  }\n`,
  `Rendimentos deve ser 0: ${janeiro.totalizador.rendimentos}, ${
    janeiro.totalizador.rendimentos === 0
  }\n`,
  `Juros deve ser -90: ${janeiro.totalizador.juros}, ${
    janeiro.totalizador.juros === -90
  }\n`,
  `Saldo deve ser -990: ${janeiro.totalizador.saldo}, ${
    janeiro.totalizador.saldo === -990
  }\n`
);
console.log(
  "Fevereio:\n",
  `Saldo inicial deve ser -990: ${fevereiro.saldoInicial}, ${
    fevereiro.saldoInicial === -990
  }\n`,
  `Receita deve ser 3000: ${fevereiro.totalizador.receitas}, ${
    fevereiro.totalizador.receitas === 3000
  }\n`,
  `Despesas deve ser 3000: ${fevereiro.totalizador.despesas}, ${
    fevereiro.totalizador.despesas === 3000
  }\n`,
  `Rendimentos deve ser 0: ${fevereiro.totalizador.rendimentos}, ${
    fevereiro.totalizador.rendimentos === 0
  }\n`,
  `Juros deve ser -99: ${fevereiro.totalizador.juros}, ${
    fevereiro.totalizador.juros === -99
  }\n`,
  `Saldo deve ser -1089: ${fevereiro.totalizador.saldo}, ${
    fevereiro.totalizador.saldo === -1089
  }\n`
);
console.log(
  "Março:\n",
  `Saldo inicial deve ser -1089: ${marco.saldoInicial}, ${
    marco.saldoInicial === -1089
  }\n`,
  `Receita deve ser 3500: ${marco.totalizador.receitas}, ${
    marco.totalizador.receitas === 3500
  }\n`,
  `Despesas deve ser 2400: ${marco.totalizador.despesas}, ${
    marco.totalizador.despesas === 2400
  }\n`,
  `Rendimentos deve ser 0.06: ${marco.totalizador.rendimentos}, ${
    marco.totalizador.rendimentos === 0.06
  }\n`,
  `Juros deve ser 0: ${marco.totalizador.juros}, ${
    marco.totalizador.juros === 0
  }\n`,
  `Saldo deve ser 11.06: ${marco.totalizador.saldo}, ${
    marco.totalizador.saldo === 11.06
  }\n`
);
