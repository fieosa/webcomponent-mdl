import { BaseCustomElement } from '../utils';

export default class Content extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-layout__content');
  }

}
