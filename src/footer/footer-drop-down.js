import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class MaterialFooterDropdown extends BaseCustomElement {

  createdCallback() {
    this.size = this.size || 'mega';
    this.insertBefore(<h1 class={`mdl-${this.size}-footer__heading`}>{this.title}</h1>, this.firstChild );
    this.insertBefore(<input class={`mdl-${this.size}-footer__heading-checkbox`} type="checkbox" checked />, this.firstChild );
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.add(`mdl-${this.size}-footer__drop-down-section`);
  }

}

export default reflectPropertiesToAttributes(
  MaterialFooterDropdown,
  [
    { propName: 'size', propType: String }, // ['mini', 'mega']
    { propName: 'title', propType: String },
  ]
)
