import { BaseCustomElement } from '../utils';

export default class MaterialIcon extends BaseCustomElement {

  createdCallback() {
    this.classList.add('material-icons');
  }
}
