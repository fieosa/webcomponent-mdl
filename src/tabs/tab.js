import { reflectPropertiesToAttributes } from '../utils';

class TabBar extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-tabs__tab');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('is-active', this.active);
    <this style="cursor: pointer;" onclick={() => this.onTabClick(this.id)}/>
  }

}

export default reflectPropertiesToAttributes(TabBar, [
  { propName: 'active', propType: Boolean },
  { propName: 'onTabClick', propType: Function },
])
