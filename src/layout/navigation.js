import { reflectPropertiesToAttributes } from '../utils';

class Navigation extends HTMLElement {

  constructor() {
    super();
    this.classList.add('mdl-navigation');
  }

  connectedCallback() {
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].classList.add("mdl-navigation__link");
    }
  }


}

export default reflectPropertiesToAttributes(Navigation, [])
