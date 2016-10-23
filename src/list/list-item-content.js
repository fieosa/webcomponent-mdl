import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
} from '../utils';

class MaterialListItemContent extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-list__item-primary-content');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    // this.classList.toggle('mdl-list__item--two-line', this.twoLine && !threeLine);
  }

}

export default reflectPropertiesToAttributes(
  MaterialListItemContent,
  [
    { propName: 'twoLine', propType: Boolean },
  ]
);
