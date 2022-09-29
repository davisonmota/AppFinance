class LancamentoServece {
  constructor() {}

  async getLancamento() {
    const response = await fetch('http://localhost:3000/api/lancamentos');
    return response.json();
  }

  async seveLancamento(lancamento) {
    await fetch('http://localhost:3000/api/lancamentos', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(lancamento),
    });
  }

  deleteLancamento(id) {
    fetch(`http://localhost:3000/api/lancamentos/${id}`, {
      method: 'delete',
    });
  }
}
