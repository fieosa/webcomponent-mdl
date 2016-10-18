import { reflectPropertiesToAttributes } from '../utils';

class Drawer extends HTMLElement {

  constructor() {
    super();
    this.classList.add('mdl-layout__drawer');
  }

}

export default reflectPropertiesToAttributes(Drawer, [])
