import { BaseCustomElement, reflectPropertiesToAttributes, makeShadow } from '../utils';

class Grid extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-grid');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const {
      classList,
      noSpacing,
    } = this;
    classList.toggle('mdl-grid--no-spacing', noSpacing);
    if (attrName === 'shadow') makeShadow(this, oldVal, newVal);
  }

}

export default reflectPropertiesToAttributes(
  Grid,
  [
    { propName: 'noSpacing', propType: Boolean },
    { propName: 'shadow', propType: Number },
  ]
)
