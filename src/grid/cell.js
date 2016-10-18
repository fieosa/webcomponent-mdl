import { reflectPropertiesToAttributes, makeShadow } from '../utils';

class Cell extends HTMLElement {

  connectedCallback() {
    this.classList.add('mdl-cell');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle(`mdl-cell--${this.col}-col`, this.col);
    this.classList.toggle(`mdl-cell--${this.phone}-col-phone`, this.phone);
    this.classList.toggle(`mdl-cell--${this.tablet}-col-tablet`, this.tablet);
    this.classList.toggle(`mdl-cell--${this.align}`, this.align);
    this.classList.toggle(`mdl-cell--${this.offset}-offset`, this.offset);
    this.classList.toggle(`mdl-cell--${this.offsetdesktop}-offset-desktop`, this.offsetdesktop);
    this.classList.toggle(`mdl-cell--${this.offsettablet}-offset-tablet`, this.offsettablet);
    this.classList.toggle(`mdl-cell--${this.offsetphone}-offset-phone`, this.offsetphone);
    this.classList.toggle(`mdl-cell--hide-desktop`, this.hidedesktop);
    this.classList.toggle(`mdl-cell--hide-phone`, this.hidephone);
    this.classList.toggle(`mdl-cell--hide-tablet`, this.hidetablet);
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
    { propName: 'offsetdesktop', propType: Number },
    { propName: 'offsettablet', propType: Number },
    { propName: 'offsetphone', propType: Number },
    { propName: 'hidedesktop', propType: Boolean },
    { propName: 'hidephone', propType: Boolean },
    { propName: 'hidetablet', propType: Boolean },
    { propName: 'shadow', propType: Number },
  ]
)
