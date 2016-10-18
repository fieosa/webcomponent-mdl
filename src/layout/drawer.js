import { reflectPropertiesToAttributes } from '../utils';

class Drawer extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-layout__drawer');
  }

}

export default reflectPropertiesToAttributes(Drawer, [])
