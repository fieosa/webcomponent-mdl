export default class MaterialIcon extends HTMLElement {

  constructor() {
    super();
  }


  connectedCallback() {
    this.classList.add('material-icons');
  }
}
