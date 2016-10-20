import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class TabBar extends BaseCustomElement {

  createdCallback() {
    const { cssPrefix, classList, parentNode } = this;
    if (!cssPrefix) {
      if (parentNode.nodeName === 'MDL-HEADER') {
        classList.add('mdl-layout__tab-bar') ;
      } else {
        classList.add('mdl-tabs__tab-bar') ;
      }
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const { classList } = this;
    classList.remove('${oldVal}__tab-bar');
    classList.add('${newVal}__tab-bar');
  }

}

export default reflectPropertiesToAttributes(TabBar, [
  { propName: 'cssPrefix', propType: String },
])
