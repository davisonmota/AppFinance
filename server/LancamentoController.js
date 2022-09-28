class LancamentoController {
  constructor(httpServer, lancamentoData) {
    httpServer.register('get', '/api/lancamentos', async (params, body) => {
      const lancamentos = await lancamentoData.getLancamento();
      return lancamentos;
    });

    httpServer.register('post', '/api/lancamentos', async (params, body) => {
      const lancamento = body;
      await lancamentoData.saveLancamento(lancamento);
    });

    httpServer.register(
      'delete',
      '/api/lancamentos/:idLancamento',
      async (params, body) => {
        const idLancamento = params;
        await lancamentoData.deleteLancamento(idLancamento);
      }
    );
  }
}

module.exports = LancamentoController;