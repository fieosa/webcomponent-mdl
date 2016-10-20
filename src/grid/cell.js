import { BaseCustomElement, reflectPropertiesToAttributes, makeShadow } from '../utils';

class Cell extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-cell');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const {
      classList,
      col,
      phone,
      tablet,
      align,
      offset,
      offsetDesktop,
      offsetTablet,
      offsetPhone,
      hideDesktop,
      hideTablet,
      hidePhone,
    } = this;
    classList.toggle(`mdl-cell--${col}-col`, col);
    classList.toggle(`mdl-cell--${phone}-col-phone`, phone);
    classList.toggle(`mdl-cell--${tablet}-col-tablet`, tablet);
    classList.toggle(`mdl-cell--${align}`, align);
    classList.toggle(`mdl-cell--${offset}-offset`, offset);
    classList.toggle(`mdl-cell--${offsetDesktop}-offset-desktop`, offsetDesktop);
    classList.toggle(`mdl-cell--${offsetTablet}-offset-tablet`, offsetTablet);
    classList.toggle(`mdl-cell--${offsetPhone}-offset-phone`, offsetPhone);
    classList.toggle(`mdl-cell--hide-desktop`, hideDesktop);
    classList.toggle(`mdl-cell--hide-phone`, hidePhone);
    classList.toggle(`mdl-cell--hide-tablet`, hideTablet);
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
