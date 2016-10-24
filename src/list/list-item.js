import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
} from '../utils';

class MaterialListItem extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-list__item');
    this.update();
  }

  update() {
    this.classList.toggle('mdl-list__item--two-line', this.twoLine && !this.threeLine);
    this.classList.toggle('mdl-list__item--three-line', !this.twoLine && this.threeLine);
  }

  attributeChangedCallback() {
    this.update();
  }

}

export default reflectPropertiesToAttributes(
  MaterialListItem,
  [
    { propName: 'twoLine', propType: Boolean },
    { propName: 'threeLine', propType: Boolean },
  ]
);
