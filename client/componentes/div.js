class Div {
  constructor (id, className) {
    this.elemento = document.createElement('div')
    this.elemento.id = id
    this.elemento.className = className || ''
  }

  adicionarElementoFilho (filho) {
    this.elemento.appendChild(filho)
  }
}
