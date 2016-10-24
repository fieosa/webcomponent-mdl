import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade,
} from '../utils';

class MaterialIconToggle extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-icon-toggle', 'mdl-js-icon-toggle');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-js-ripple-effect', this.ripple);
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialIconToggle),
  [
    { propName: 'ripple', propType: Boolean },
  ]
);
