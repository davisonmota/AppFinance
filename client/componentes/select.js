class Select {
  constructor(id) {
    this.elemento = document.createElement("select");
    this.elemento.id = id;
  }
  adicionarOption(texto) {
    const option = document.createElement("option");
    option.innerText = texto;
    this.elemento.appendChild(option);
  }
}