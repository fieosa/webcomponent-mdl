import { reflectPropertiesToAttributes } from '../utils';

class Navigation extends HTMLElement {

  connectedCallback() {
    const {
      classList,
      children,
    } = this;
    classList.add('mdl-navigation');
    for (let i = 0; i < children.length; i++) {
      children[i].classList.add("mdl-navigation__link");
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const {
      classList,
      largescreen,
    } = this;
    classList.toggle('mdl-layout--large-screen-only', largescreen);
  }


}

export default reflectPropertiesToAttributes(Navigation, [
  {propName: 'largescreen', propType: Boolean},
])
