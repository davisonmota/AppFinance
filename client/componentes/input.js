class Input {
  constructor(type, placeholder, id) {
    this.elemento = document.createElement("input");
    this.elemento.id = id;
    this.elemento.type = type;
    this.elemento.placeholder = placeholder;
  }
}