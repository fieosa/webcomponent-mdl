export default class Content extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-layout__content');
  }

}
