import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
} from '../utils';

class MaterialListItemAction extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-list__item-secondary-content');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    // this.classList.toggle('mdl-list__item--two-line', this.twoLine && !threeLine);
  }

}

export default reflectPropertiesToAttributes(
  MaterialListItemAction,
  [
    { propName: 'twoLine', propType: Boolean },
  ]
);
