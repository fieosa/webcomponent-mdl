import { reflectPropertiesToAttributes } from '../utils';

class TabBar extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-tabs__tab-bar');
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    for(let i = 0; i < this.children.length; i++) {
      let child = children[i];
      child.active = child.id === this.activeTab;
      child.onTabClick = () => {
        if (this.onchange) this.onchange(child.id);
      };
    }
  }

}

export default reflectPropertiesToAttributes(TabBar, [
  { propName: 'activeTab', propType: Number },
])
