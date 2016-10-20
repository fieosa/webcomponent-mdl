import { BaseCustomElement } from '../utils';

export default class HeaderRow extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-layout__header-row');
  }

}
