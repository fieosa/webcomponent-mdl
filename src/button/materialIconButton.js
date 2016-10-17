import { default as MaterialButton } from './materialButton';
import { default as MaterialIcon } from '../icon';

export default class MaterialIconButton extends MaterialButton {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('mdl-button--icon');
    if (this.name) {
      this.innerHTML = `<mdl-icon>${this.getAttribute('name')}</mdl-icon>`;
    }
  }

  get name() {
    return this.hasAttribute('name');
  }

  set name(val) {
    if (val) {
      this.setAttribute('name', val);
    } else {
      this.removeAttribute('name');
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback();
  }
}
