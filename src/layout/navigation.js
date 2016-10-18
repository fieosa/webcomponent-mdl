import { reflectPropertiesToAttributes } from '../utils';

class Navigation extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-navigation');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-layout--large-screen-only', this.largescreen);
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].classList.add("mdl-navigation__link");
    }
  }


}

export default reflectPropertiesToAttributes(Navigation, [
  {propName: 'largescreen', propType: Boolean},
])
