class Tabela {
  constructor(className) {
    this.elemento = document.createElement('table');
    this.elemento.className = className;
  }

  adicionarLinha(tipo, valores, buttons) {
    const tr = document.createElement('tr');
    for (const valor of valores) {
      const coluna = document.createElement(tipo);
      coluna.innerText = valor;
      tr.appendChild(coluna);
    }
    if (buttons) {
      for (const button of buttons) {
        const coluna = document.createElement(tipo);
        coluna.append(button.elemento);
        tr.appendChild(coluna);
      }
    }
    this.elemento.appendChild(tr);
  }
}
