import {
  BaseCustomElement,
  basicClassCreator,
  reflectPropertiesToAttributes,
  mdlUpgrade,
} from '../utils';

class Menu extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-menu', 'mdl-js-menu');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.setAttribute('data-mdl-for', this.target);
    this.classList.remove(this._alignClass);
    this._alignClass = `mdl-menu--${this.valign || 'bottom'}-${this.align || 'left'}`;
    this.classList.add(this._alignClass);
    this.classList.toggle('mdl-js-ripple-effect', this.ripple);
  }

}

export const MaterialMenu = reflectPropertiesToAttributes(
  mdlUpgrade(Menu),
  [
    { propName: 'align', propType: String }, // ['left', 'right']
    { propName: 'ripple', propType: Boolean },
    { propName: 'target', propType: String },
    { propName: 'valign', propType: String }, // ['bottom', 'top']
  ]
)

export const MaterialMenuItem = basicClassCreator('mdl-menu__item');
