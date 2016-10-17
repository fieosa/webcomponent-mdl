import { mdlUpgrade, reflectPropertiesToAttributes } from '../utils';

class MaterialTooltip extends HTMLElement {

  constructor() {
    super();
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
  mdlUpgrade(MaterialTooltip), [
  { propName: 'name', propType: String }
])
