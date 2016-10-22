import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class Navigation extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-navigation');
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].classList.add("mdl-navigation__link");
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-layout--large-screen-only', this.largeScreen);
  }


}

export default reflectPropertiesToAttributes(Navigation, [
  {propName: 'largeScreen', propType: Boolean},
])
