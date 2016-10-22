import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class Header extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-layout__header');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-layout__header--scroll', this.scroll);
    this.classList.toggle('mdl-layout__header--seamed', this.seamed);
    this.classList.toggle('mdl-layout__header--transparent', this.transparent);
    this.classList.toggle('mdl-layout__header--waterfall', this.waterfall);
    this.classList.toggle('mdl-layout__header--waterfall-hide-top', this.hideTop);
  }

}

export default reflectPropertiesToAttributes(Header, [
  { propName: 'scroll', propType: Boolean },
  { propName: 'seamed', propType: Boolean },
  { propName: 'title', propType: String },
  { propName: 'transparent', propType: Boolean },
  { propName: 'waterfall', propType: Boolean },
  { propName: 'hideTop', propType: Boolean },
])
