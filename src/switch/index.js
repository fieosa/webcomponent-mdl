import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade,
} from '../utils';

class MaterialSwitch extends BaseCustomElement {

  createdCallback(children) {
    this.classList.add('mdl-switch', 'mdl-js-switch');
    this._input = <input type="checkbox" class="mdl-switch__input"/>;
    this._onclick = this._onclick.bind(this);
    <this>
      <this._input/>
      <span class="mdl-switch__label">{children}</span>
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
    this._input.dispatchEvent(new Event('change',{ bubbles: true }));
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-js-ripple-effect', this.ripple);
    this._input.checked = this.checked;
    this._input.disabled = this.disabled;
  }

}

export default reflectPropertiesToAttributes(
  mdlUpgrade(MaterialSwitch),
  [
    { propName: 'checked', propType: Boolean },
    { propName: 'disabled', propType: Boolean },
    { propName: 'ripple', propType: Boolean },
  ]
)
