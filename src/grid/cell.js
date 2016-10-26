import { BaseCustomElement, reflectPropertiesToAttributes, makeShadow } from '../utils';

class Cell extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-cell');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle(`mdl-cell--${this.col}-col`, this.col);
    this.classList.toggle(`mdl-cell--${this.phone}-col-phone`, this.phone);
    this.classList.toggle(`mdl-cell--${this.tablet}-col-tablet`, this.tablet);
    this.classList.toggle(`mdl-cell--${this.align}`, this.align);
    this.classList.toggle(`mdl-cell--${this.offset}-offset`, this.offset);
    this.classList.toggle(`mdl-cell--${this.offsetDesktop}-offset-desktop`, this.offsetDesktop);
    this.classList.toggle(`mdl-cell--${this.offsetTablet}-offset-tablet`, this.offsetTablet);
    this.classList.toggle(`mdl-cell--${this.offsetPhone}-offset-phone`, this.offsetPhone);
    this.classList.toggle(`mdl-cell--hide-desktop`, this.hideDesktop);
    this.classList.toggle(`mdl-cell--hide-phone`, this.hidePhone);
    this.classList.toggle(`mdl-cell--hide-tablet`, this.hideTablet);
    if (attrName === 'shadow') makeShadow(this, oldVal, newVal);
  }

}

export default reflectPropertiesToAttributes(
  Cell,
  [
    { propName: 'align', propType: String }, // ['top', 'middle', 'bottom', 'stretch']
    { propName: 'col', propType: Number },
    { propName: 'phone', propType: Number },
    { propName: 'tablet', propType: Number },
    { propName: 'offset', propType: Number },
    { propName: 'offsetDesktop', propType: Number },
    { propName: 'offsetTablet', propType: Number },
    { propName: 'offsetPhone', propType: Number },
    { propName: 'hideDesktop', propType: Boolean },
    { propName: 'hidePhone', propType: Boolean },
    { propName: 'hideTablet', propType: Boolean },
    { propName: 'shadow', propType: Number },
  ]
)
