import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class MaterialFooterLinkList extends BaseCustomElement {

  createdCallback(children) {
    this.size = this.size || 'mega';
    this._listContainer = <ul>{children}</ul>;
    <this>{this._listContainer}</this>
    this.attributeChangedCallback();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this._listContainer.classList.add(`mdl-${this.size}-footer__link-list`);
  }

}

export default reflectPropertiesToAttributes(
  MaterialFooterLinkList,
  [
    { propName: 'size', propType: String }, // ['mini', 'mega']
  ]
)
