import { reflectPropertiesToAttributes } from '../utils';

class Tabs extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-tabs', 'mdl-js-tabs');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-js-ripple-effect', this.ripple);
  }

}

export default reflectPropertiesToAttributes(Tabs, [
  { propName: 'activetab', propType: Number },
  { propName: 'ripple', propType: Boolean },
])
