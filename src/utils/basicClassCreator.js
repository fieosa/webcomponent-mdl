import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade
} from '../utils';

export default (defaultClassName) => {
  class baseComponent extends BaseCustomElement {
    createdCallback(children) {
      this.classList.add(defaultClassName);
    }
  }
  return reflectPropertiesToAttributes(mdlUpgrade(baseComponent), []);
};


