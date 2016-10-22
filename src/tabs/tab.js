import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class TabBar extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-tabs__tab');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('is-active', this.active);
    this.style.cursor = 'pointer';
  }

}

export default reflectPropertiesToAttributes(TabBar, [
  { propName: 'active', propType: Boolean },
  { propName: 'href', propType: String },
])
