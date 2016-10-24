import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
} from '../utils';

class MaterialListItemAvatar extends BaseCustomElement {

  createdCallback() {
    this.classList.add('material-icons');
    this.update();
  }

  update() {
    this.classList.toggle('mdl-list__item-avatar', this.large);
    this.classList.toggle('mdl-list__item-icon', !this.large);
  }

  attributeChangedCallback() {
    this.update();
  }

}

export default reflectPropertiesToAttributes(
  MaterialListItemAvatar,
  [
    { propName: 'large', propType: Boolean },
  ]
);
