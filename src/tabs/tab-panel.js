import { reflectPropertiesToAttributes } from '../utils';

class TabPanel extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-tabs__panel');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const { classList, active } = this;
    classList.toggle('is-active', active);
  }

}

export default reflectPropertiesToAttributes(TabPanel, [
  { propName: 'active', propType: Boolean },
])
