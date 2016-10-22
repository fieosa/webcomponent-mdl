import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade } from '../utils';

class MaterialButton extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-button', 'mdl-js-button');
    this._onclick = this._onclick.bind(this);
    this.addEventListener('click', this._onclick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onclick);
  }

  _onclick() {
    var href = this.getAttribute('href');
    var target = this.getAttribute('target');
    if (href) {
      window.open(href, target);
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-js-ripple-effect', this.ripple);
    this.classList.toggle('mdl-button--raised', this.raised);
    this.classList.toggle('mdl-button--colored', this.colored);
    this.classList.toggle('mdl-button--primary', this.primary);
    this.classList.toggle('mdl-button--accent', this.accent);
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialButton),
  [
    { propName: 'ripple' },
    { propName: 'raised' },
    { propName: 'colored' },
    { propName: 'primary' },
    { propName: 'accent' },
  ]
)
