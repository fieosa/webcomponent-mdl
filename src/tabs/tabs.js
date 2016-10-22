import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class Tabs extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-tabs', 'mdl-js-tabs');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.add('mdl-tabs', 'mdl-js-tabs');
    this.classList.toggle('mdl-js-ripple-effect', this.ripple);
  }

}

export default reflectPropertiesToAttributes(
  Tabs,
  [
    { propName: 'ripple', propType: Boolean },
  ]
)
