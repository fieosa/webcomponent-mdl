import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class MaterialFooterLinkList extends BaseCustomElement {

  createdCallback() {
    this.size = this.size || 'mega';
    this.attributeChangedCallback();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.add(`mdl-${this.size}-footer__link-list`);
  }

}

export default reflectPropertiesToAttributes(
  MaterialFooterLinkList,
  [
    { propName: 'size', propType: String }, // ['mini', 'mega']
  ]
)
