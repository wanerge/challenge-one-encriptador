class elemento {
  #id;
  #display;
  constructor(id) {
    this.#id = id;
  }
  get id() {
    return this.#id;
  }
  mostrar(condicion) {
    if (condicion) {
      this.#id.style.display = "initial";
    } else {
      this.#id.style.display = "none";
    }
  }
}
