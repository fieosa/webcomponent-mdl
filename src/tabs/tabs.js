import { reflectPropertiesToAttributes, mdlUpgrade } from '../utils';

class Tabs extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-tabs', 'mdl-js-tabs');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-js-ripple-effect', this.ripple);
    <this>
        <TabBar activeTab={this.activeTab} onchange={this.onchange}>
            {this.children}
        </TabBar>
    </this>
  }

}

export default reflectPropertiesToAttributes(mdlUpgrade(Tabs), [
  { propName: 'activeTab', propType: Number },
  { propName: 'ripple': propType: Boolean },
])
