import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class MaterialFooterSection extends BaseCustomElement {

  createdCallback() {
    this.size = this.size || 'mega';
    this.type = this.type || 'left';
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.add(`mdl-${this.size}-footer__${this.type}-section`);
  }

}

export default reflectPropertiesToAttributes(
  MaterialFooterSection,
  [
    { propName: 'size', propType: String }, // ['mini', 'mega']
    { propName: 'type', propType: String }, // ['top', 'middle', 'bottom', 'left', 'right']
  ]
)
