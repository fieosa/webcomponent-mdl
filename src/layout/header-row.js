import { reflectPropertiesToAttributes } from '../utils';

class HeaderRow extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-layout__header-row');
  }

}

export default reflectPropertiesToAttributes(HeaderRow, [])
