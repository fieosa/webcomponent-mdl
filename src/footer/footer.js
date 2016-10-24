import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class MaterialFooter extends BaseCustomElement {

  createdCallback(children) {
    this.size = this.size || 'mega';
    this._footerContainer = <footer>{children}</footer>;
    <this>{this._footerContainer}</this>
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this._footerContainer.classList.add(`mdl-${this.size}-footer`);
  }

}

export default reflectPropertiesToAttributes(
  MaterialFooter,
  [
    { propName: 'size', propType: String }, // ['mini', 'mega']
  ]
)
