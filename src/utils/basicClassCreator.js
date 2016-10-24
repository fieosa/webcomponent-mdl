import { BaseCustomElement } from '../utils';

export default (...defaultClassName) => {
  class baseComponent extends BaseCustomElement {
    createdCallback() {
      this.classList.add(...defaultClassName);
    }
  }
  return baseComponent;
};
