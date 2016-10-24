import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
} from '../utils';

class MaterialListItemSubtitle extends BaseCustomElement {

  createdCallback() {
    this.update();
  }

  update() {
    this.classList.toggle('mdl-list__item-text-body', this.large);
    this.classList.toggle('mdl-list__item-sub-title', !this.large);
  }

  attributeChangedCallback() {
    this.update();
  }

}

export default reflectPropertiesToAttributes(
  MaterialListItemSubtitle,
  [
    { propName: 'large', propType: Boolean },
  ]
);
