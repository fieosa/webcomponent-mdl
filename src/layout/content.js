import { reflectPropertiesToAttributes } from '../utils';

class Content extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-layout__content');
  }

}

export default reflectPropertiesToAttributes(Content, [])
