import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class MaterialBadge extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-badge');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const {
      classList,
      overlap,
      noBackground,
    } = this;
    classList.toggle('mdl-badge--overlap', overlap);
    classList.toggle('mdl-badge--no-background', noBackground);
    if (attrName === 'text') {
      this.setAttribute('data-badge', newVal);
    }
  }

}

export default reflectPropertiesToAttributes(MaterialBadge, [
  { propName: 'text', attrName: 'data-badge', propType: String },
  { propName: 'overlap' },
  { propName: 'noBackground' },
])
