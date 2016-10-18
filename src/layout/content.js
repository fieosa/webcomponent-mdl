import { reflectPropertiesToAttributes } from '../utils';

class Content extends HTMLElement {

  constructor() {
    super();
    this.classList.add('mdl-layout__content');
  }

}

export default reflectPropertiesToAttributes(Content, [])
