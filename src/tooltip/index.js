import { mdlUpgrade, reflectPropertiesToAttributes } from '../utils';

class MaterialTooltip extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-tooltip');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const { classList, large } = this;
    classList.toggle('mdl-tooltip--large', large);
    if (attrName === 'position') {
      oldVal && classList.remove(`mdl-tooltip--${oldVal}`);
      newVal && classList.add(`mdl-tooltip--${newVal}`);
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
