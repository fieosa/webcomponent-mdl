import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class Navigation extends BaseCustomElement {

  createdCallback() {
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
      largeScreen,
    } = this;
    classList.toggle('mdl-layout--large-screen-only', largeScreen);
  }


}

export default reflectPropertiesToAttributes(Navigation, [
  {propName: 'largeScreen', propType: Boolean},
])
