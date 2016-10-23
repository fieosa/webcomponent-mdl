import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
} from '../utils';

class MaterialListItem extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-list__item');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-list__item--two-line', this.twoLine && !threeLine);
    this.classList.toggle('mdl-list__item--three-line', !this.twoLine && threeLine);
  }

}

export default reflectPropertiesToAttributes(
  ListItem,
  [
    { propName: 'twoLine', propType: Boolean },
    { propName: 'threeLine', propType: Boolean },
  ]
)
