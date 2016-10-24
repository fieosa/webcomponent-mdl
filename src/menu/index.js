import {
  BaseCustomElement,
  basicClassCreator,
  reflectPropertiesToAttributes,
  mdlUpgrade,
} from '../utils';

class Menu extends BaseCustomElement {

  createdCallback() {
    this._ul = <ul class="mdl-menu mdl-js-menu"></ul>;
  }

  connectedCallback() {
    const children = this.getChildren();
    for (let i = 0; i < children.length; i++) {
      this._ul.appendChild(children[i]);
    }
    this.innerHTML = '';
    this.appendChild(this._ul);
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this._ul.setAttribute('data-mdl-for', this.target);
    this._ul.classList.remove(this._alignClass);
    this._alignClass = `mdl-menu--${this.valign || 'bottom'}-${this.align || 'left'}`;
    this._ul.classList.add(this._alignClass);
    this._ul.classList.toggle('mdl-js-ripple-effect', this.ripple);
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
