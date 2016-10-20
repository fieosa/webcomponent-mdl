import { BaseCustomElement, reflectPropertiesToAttributes, mdlUpgrade } from '../utils';

class Layout extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-layout', 'mdl-js-layout');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const {
      classList,
      fixeddrawer,
      fixedheader,
      fixedtabs,
    } = this;
    classList.toggle('mdl-layout--fixed-drawer', fixeddrawer);
    classList.toggle('mdl-layout--fixed-header', fixedheader);
    classList.toggle('mdl-layout--fixed-tabs', fixedtabs);
  }


}

export default reflectPropertiesToAttributes(
  mdlUpgrade(Layout),
  [
    { propName: 'fixeddrawer', propType: Boolean },
    { propName: 'fixedheader', propType: Boolean },
    { propName: 'fixedtabs', propType: Boolean }
  ]
)
