class Button {
  constructor(id, texto) {
    this.elemento = document.createElement("button");
    this.elemento.id = id;
    this.elemento.innerText = texto;
  }
  addListener(funcao) {
    this.elemento.addEventListener("click", funcao);
  }
}