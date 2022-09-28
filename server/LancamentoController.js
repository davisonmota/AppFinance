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
      '/api/lancamentos/:id',
      async (params, body) => {
        const { id } = params;
        await lancamentoData.deleteLancamento(id);
      }
    );
  }
}

module.exports = LancamentoController;
