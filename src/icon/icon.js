class MaterialIcon extends HTMLElement {

  constructor() {
    super();
    this.classList.add('material-icons');
  }

}

customElements.define('mdl-icon', MaterialIcon);
