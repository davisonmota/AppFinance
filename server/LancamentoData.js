class LancamentoData {
  constructor(connection) {
    this.connection = connection;
  }

  async getLancamento() {
    const lancamentos = await this.connection.query(
      'select * from financas_pessoais.lancamento',
      []
    );
    return lancamentos;
  }

  async saveLancamento(lancamento) {
    await this.connection.query(
      'insert into financas_pessoais.lancamento(mes, categoria, tipo, valor) values ($1, $2, $3, $4)',
      [lancamento.mes, lancamento.categoria, lancamento.tipo, lancamento.valor]
    );
  }

  async deleteLancamento(idLancamento) {
    await this.connection.query(
      'delete from financas_pessoais.lancamento whare id_lancamento = $1',
      [idLancamento]
    );
  }
}
module.exports = LancamentoData;
