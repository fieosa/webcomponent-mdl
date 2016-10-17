import { default as MaterialButton } from './material-button';
import { default as MaterialIcon } from '../icon';

export default class MaterialIconButton extends MaterialButton {

  constructor() {
    super();
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

}
