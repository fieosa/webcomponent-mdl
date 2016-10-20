import { BaseCustomElement } from '../utils';

export default class Spacer extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-layout-spacer');
  }
}
