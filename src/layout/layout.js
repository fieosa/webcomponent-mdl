import { reflectPropertiesToAttributes } from '../utils';

class Layout extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-layout', 'mdl-js-layout');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-layout--fixed-drawer', this.fixeddrawer);
    this.classList.toggle('mdl-layout--fixed-header', this.fixedheader);
    this.classList.toggle('mdl-layout--fixed-tabs', this.fixedtabs);
  }


}

export default reflectPropertiesToAttributes(
  Layout,
  [
    { propName: 'fixeddrawer', propType: Boolean },
    { propName: 'fixedheader', propType: Boolean },
    { propName: 'fixedtabs', propType: Boolean }
  ]
)
