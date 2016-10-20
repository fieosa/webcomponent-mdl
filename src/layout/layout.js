import { BaseCustomElement, reflectPropertiesToAttributes, mdlUpgrade } from '../utils';

class Layout extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-layout', 'mdl-js-layout');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const {
      classList,
      fixedDrawer,
      fixedHeader,
      fixedTabs,
    } = this;
    classList.toggle('mdl-layout--fixed-drawer', fixedDrawer);
    classList.toggle('mdl-layout--fixed-header', fixedHeader);
    classList.toggle('mdl-layout--fixed-tabs', fixedTabs);
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
