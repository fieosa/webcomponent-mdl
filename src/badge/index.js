import { BaseCustomElement, reflectPropertiesToAttributes } from '../utils';

class MaterialBadge extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-badge');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-badge--overlap', this.overlap);
    this.classList.toggle('mdl-badge--no-background', this.noBackground);
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
