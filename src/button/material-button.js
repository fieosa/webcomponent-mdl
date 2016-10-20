import { reflectPropertiesToAttributes, mdlUpgrade } from '../utils';

class MaterialButton extends HTMLElement {

  connectedCallback() {
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
    const {
      classList,
      ripple,
      raised,
      colored,
      primary,
      accent,
    } = this;
    classList.toggle('mdl-js-ripple-effect', ripple);
    classList.toggle('mdl-button--raised', raised);
    classList.toggle('mdl-button--colored', colored);
    classList.toggle('mdl-button--primary', primary);
    classList.toggle('mdl-button--accent', accent);
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
