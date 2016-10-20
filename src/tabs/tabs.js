import { reflectPropertiesToAttributes, mdlUpgrade } from '../utils';

class Tabs extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-tabs', 'mdl-js-tabs');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const { classList, ripple } = this;
    classList.toggle('mdl-js-ripple-effect', ripple);
  }

}

export default reflectPropertiesToAttributes(
  Tabs,
  [
    { propName: 'activetab', propType: Number },
    { propName: 'ripple', propType: Boolean },
  ]
)
