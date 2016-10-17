import { reflectPropertiesToAttributes } from '../utils';

class MaterialButton extends HTMLButtonElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add('mdl-button', 'mdl-js-button');
    this.addEventListener('click', this._onclick.bind(this));
  }

  _onclick(e) {
    var href = this.getAttribute('href');
    var target = this.getAttribute('target');
    if (href) {
      window.open(href, target);
    }
    e.preventDefault();
  }

  static get observedAttributes() {
    return ['ripple', 'raised', 'colored', 'primary', 'accent'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-js-ripple-effect', this.ripple);
    this.classList.toggle('mdl-button--raised', this.raised);
    this.classList.toggle('mdl-button--colored', this.colored);
    this.classList.toggle('mdl-button--primary', this.primary);
    this.classList.toggle('mdl-button--accent', this.accent);
  }

}

export default reflectPropertiesToAttributes(MaterialButton, [
  { propName: 'ripple' },
  { propName: 'raised' },
  { propName: 'colored' },
  { propName: 'primary' },
  { propName: 'accent' },
]);
