import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class TabBar extends BaseCustomElement {

  createdCallback() {
    if (!this.cssPrefix) {
      if (this.parentNode.nodeName === 'MDL-HEADER') {
        this.classList.add('mdl-layout__tab-bar') ;
      } else {
        this.classList.add('mdl-tabs__tab-bar') ;
      }
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.remove('${oldVal}__tab-bar');
    this.classList.add('${newVal}__tab-bar');
  }

}

export default reflectPropertiesToAttributes(TabBar, [
  { propName: 'cssPrefix', propType: String },
])
