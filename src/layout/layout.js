import { reflectPropertiesToAttributes } from '../utils';

class Layout extends HTMLElement {

  constructor() {
    super();
    this.classList.add('mdl-layout', 'mdl-js-layout');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-layout--fixed-drawer', this.fixedDrawer);
  }


}

export default reflectPropertiesToAttributes(
  Layout,
  [
    { propName: 'fixedDrawer', propType: Boolean },
    { propName: 'fixedHeader', propType: Boolean },
    { propName: 'fixedTabs', propType: Boolean }
  ]
)
