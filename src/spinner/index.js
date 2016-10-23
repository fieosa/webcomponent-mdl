import { BaseCustomElement, reflectPropertiesToAttributes, mdlUpgrade } from '../utils';

class MaterialSpinner extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-spinner', 'mdl-js-spinner', 'is-active');
  }

  attributeChangedCallback() {
    this.classList.toggle('mdl-spinner--single-color', this.singleColor);
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialSpinner),
  [
    { propName: 'singleColor', propType: Boolean },
  ]
)
