import { reflectPropertiesToAttributes } from '../utils';

class Header extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-layout__layout__header');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const {
      classList,
      scroll,
      seamed,
      transparent,
      waterfall,
      hideTop,
    } = this;
    classList.toggle('mdl-layout__header--scroll', scroll);
    classList.toggle('mdl-layout__header--seamed', seamed);
    classList.toggle('mdl-layout__header--transparent', transparent);
    classList.toggle('mdl-layout__header--waterfall', waterfall);
    classList.toggle('mdl-layout__header--waterfall-hide-top', hideTop);
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
