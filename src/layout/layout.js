import { BaseCustomElement, reflectPropertiesToAttributes, mdlUpgrade } from '../utils';

class Layout extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-layout', 'mdl-js-layout');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-layout--fixed-drawer', this.fixedDrawer);
    this.classList.toggle('mdl-layout--fixed-header', this.fixedHeader);
    this.classList.toggle('mdl-layout--fixed-tabs', this.fixedTabs);
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(Layout),
  [
    { propName: 'fixedDrawer', propType: Boolean },
    { propName: 'fixedHeader', propType: Boolean },
    { propName: 'fixedTabs', propType: Boolean }
  ]
)
