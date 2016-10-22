import { BaseCustomElement, reflectPropertiesToAttributes, mdlUpgrade } from '../utils';

class MaterialTooltip extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-tooltip');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-tooltip--large', this.large);
    if (attrName === 'position') {
      oldVal && this.classList.remove(`mdl-tooltip--${oldVal}`);
      newVal && this.classList.add(`mdl-tooltip--${newVal}`);
    }
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialTooltip),
  [
    { propName: 'large', propType: Boolean },
    { propName: 'position', propType: String },
  ]
)
