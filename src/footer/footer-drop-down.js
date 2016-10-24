import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class MaterialFooterDropdown extends BaseCustomElement {

  createdCallback(children) {
    this.size = this.size || 'mega';
    <this>
      <input class={`mdl-${this.size}-footer__heading-checkbox`} type="checkbox" checked />
      <h1 class={`mdl-${this.size}-footer__heading`}>{this.title}</h1>
      {children}
    </this>
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
