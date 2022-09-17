class Lancamento {
  constructor(categoria, tipo, valor) {
    if (tipo !== "receita" && tipo !== "despesa") {
      throw new Error(
        "Lançamento Inválido: O lançamento deve ser uma despesa ou uma receita."
      );
    }
    if (valor <= 0) {
      throw new Error("Lançamento Inválido: O valor deve ser maior que ZERO.");
    }
    if (categoria === "") {
      throw new Error("Lançamento Inválido: A categoria é obrigatória.");
    }
    this.categoria = categoria;
    this.tipo = tipo;
    this.valor = valor;
  }

  getValorString() {
    return this.tipo === "despesa" ? this.valor * -1 : this.valor;
  }
}
