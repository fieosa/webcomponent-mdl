import { reflectPropertiesToAttributes } from '../utils';

class TabBar extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-tabs__tab');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const { classList, style, active } = this;
    classList.toggle('is-active', active);
    style.cursor = 'pointer';
  }

}

export default reflectPropertiesToAttributes(TabBar, [
  { propName: 'active', propType: Boolean },
  { propName: 'href', propType: String },
])
