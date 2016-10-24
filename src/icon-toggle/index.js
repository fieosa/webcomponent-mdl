import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade,
} from '../utils';

class MaterialIconToggle extends BaseCustomElement {

  createdCallback() {
    this.classList.add('mdl-icon-toggle', 'mdl-js-icon-toggle');
    this._input = <input type="checkbox" class="mdl-icon-toggle__input"/>;
    this._onclick = this._onclick.bind(this);
    <this>
      {this._input}
      <i class="mdl-icon-toggle__label material-icons">{this.name}</i>
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
    if (attrName === 'checked') {
      this._input.checked = this.checked;
      this._input.dispatchEvent(new Event('change',{ bubbles: true }));
    }
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialIconToggle),
  [
    { propName: 'ripple', propType: Boolean },
    { propName: 'disabled', propType: Boolean },
    { propName: 'checked', propType: Boolean },
    { propName: 'name', propType: String },
  ]
);
