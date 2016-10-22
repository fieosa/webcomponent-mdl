import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
  mdlUpgrade,
} from '../utils';

class MaterialSwitch extends BaseCustomElement {

  createdCallback(children) {
    this.classList.add('mdl-switch', 'mdl-js-switch');
    this._input = <input type="checkbox" class="mdl-switch__input"/>;
    <this onclick={this._onclick}>
      <this._input/>
      <span class="mdl-switch__label">{children}</span>
    </this>
  }

  _onclick(e) {
    e.preventDefault();
    if (this.disabled) return;
    this.checked = !this.checked;
    this._input.dispatchEvent(new Event('change'));
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
