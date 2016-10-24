import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class MaterialFooter extends BaseCustomElement {

  createdCallback() {
    this.size = this.size || 'mega';
    this.style.display = 'block';
    this.attributeChangedCallback();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.add(`mdl-${this.size}-footer`);
  }

}

export default reflectPropertiesToAttributes(
  MaterialFooter,
  [
    { propName: 'size', propType: String }, // ['mini', 'mega']
  ]
)
