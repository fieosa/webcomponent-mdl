import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade,
} from '../utils';

class MaterialCheckbox extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-checkbox', 'mdl-js-checkbox');
    this._input = <input type="checkbox" class="mdl-checkbox__input"/>;
    this._label = <span class="mdl-checkbox__label">{this.label}</span>;
    this._onclick = this._onclick.bind(this);
    <this>
      {this._input}
      {this._label}
    </this>
  }

  connectedCallback() {
    this.addEventListener('click', this._onclick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onclick);
  }

  _onclick() {
    if (this.disabled) return;
    this.checked = !this.checked;
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-js-ripple-effect', this.ripple);
    this._input.disabled = this.disabled;
    this._label.textContent = this.label;
    if (attrName === 'checked') {
      this._input.checked = this.checked;
      this._input.dispatchEvent(new Event('change',{ bubbles: true }));
    }
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialCheckbox),
  [
    { propName: 'ripple', propType: Boolean },
    { propName: 'disabled', propType: Boolean },
    { propName: 'checked', propType: Boolean },
    { propName: 'label', propType: String },
  ]
);
