import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade,
} from '../utils';

class MaterialRadio extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-radio', 'mdl-js-radio');
    this._input = <input type="radio" class="mdl-radio__button"/>;
    this._onclick = this._onclick.bind(this);
    <this>
      {this._input}
      <span class="mdl-radio__label">{this.label}</span>
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
    this._input.checked = true;
    this._input.dispatchEvent(new Event('change',{ bubbles: true }));
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-js-ripple-effect', this.ripple);
    this._input.checked = this.checked;
    this._input.disabled = this.disabled;
    this._input.value = this.value;
    this._input.name = this.name;
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialRadio),
  [
    { propName: 'ripple', propType: Boolean },
    { propName: 'disabled', propType: Boolean },
    { propName: 'checked', propType: Boolean },
    { propName: 'name', propType: String },
    { propName: 'value', propType: String },
    { propName: 'label', propType: String },
  ]
);
