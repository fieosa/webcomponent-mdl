import { BaseCustomElement } from '../utils';

export default class Drawer extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-layout__drawer');
  }

}
