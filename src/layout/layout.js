import { reflectPropertiesToAttributes } from '../utils';

class Layout extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-layout', 'mdl-js-layout');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-grid--no-spacing', this.noSpacing);
    <this>
      <div className="mdl-layout__inner-container">
        {this.childNodes}
      </div>
    </this>
  }

}

export default reflectPropertiesToAttributes(
  Layout,
  [
    { propName: 'fixedDrawer', propType: Boolean },
    { propName: 'fixedHeader', propType: Boolean },
    { propName: 'fixedTabs', propType: Boolean },
  ]
)
