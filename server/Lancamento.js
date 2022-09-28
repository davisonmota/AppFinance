class Lancamento {
  constructor(mes, categoria, tipo, valor, id) {
    if (tipo !== 'receita' && tipo !== 'despesa') {
      throw new Error(
        'Lançamento Inválido: O lançamento deve ser uma despesa ou uma receita.'
      );
    }
    if (valor <= 0) {
      throw new Error('Lançamento Inválido: O valor deve ser maior que ZERO.');
    }
    if (categoria === '') {
      throw new Error('Lançamento Inválido: A categoria é obrigatória.');
    }
    this.mes = mes;
    this.categoria = categoria;
    this.tipo = tipo;
    this.valor = valor;
    this.id = id;
  }
}
module.exports = Lancamento;
